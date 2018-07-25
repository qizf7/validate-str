const env = require('yargs').argv.env;
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, mode;
let exposeName = 'validateStr';

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
}

/**
 * webpack config
 */
module.exports = {
  mode: mode,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: exposeName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}
