
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: 'validateStr',
    libraryTarget: 'umd',
    filename: 'validate-str.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
