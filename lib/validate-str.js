(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("validateStr", [], factory);
	else if(typeof exports === 'object')
		exports["validateStr"] = factory();
	else
		root["validateStr"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ResultArray.js":
/*!****************************!*\
  !*** ./src/ResultArray.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResultArray = function () {
  function ResultArray() {
    _classCallCheck(this, ResultArray);

    this.results = [];
  }

  _createClass(ResultArray, [{
    key: "push",
    value: function push(result) {
      this.results.push(result);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.results.every(function (result) {
        return result.errors.length === 0;
      });
    }
  }, {
    key: "getErrorsByName",
    value: function getErrorsByName(name) {
      var result = this.results.find(function (result) {
        return result.name === name;
      });
      return result.errors;
    }
  }]);

  return ResultArray;
}();

module.exports = ResultArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexs = __webpack_require__(/*! ./regexs */ "./src/regexs.js");
var ResultArray = __webpack_require__(/*! ./ResultArray */ "./src/ResultArray.js");

/**
 * @param {String} 被校验的字符串
 * @param {(String|Function|RegExp)} 校验方法
 * @returns {Boolean} true通过校验 false未通过校验
 */
function test(v, method) {

  /**
   * 空字符串，并且非require，通过所有校验
   */
  if (v === '' && method !== 'require') return true;

  /**
   * method为字符串时，使用内置正则校验
   * method为正则时，使用此正则校验
   * method为方法时，使用方法校验
   */
  if (typeof method === 'string') {
    if (method in regexs) {
      return regexs[method].test(v);
    } else {
      throw new TypeError('not a valid method string!!!!!!!!!!!');
    }
  } else if (method instanceof RegExp) {
    return method.test(v);
  } else if (typeof method === 'function') {
    return method(v);
  } else {
    throw new TypeError('unsupported method');
  }
}

/**
 * 校验方法
 * @param  {Array} validArr 校验数组
 * @param  {Objecg} options   选项
 * @return {Array} 验证结果
 */
function validate(vlEntries, options) {
  if (!vlEntries) {
    throw new TypeError('need validation array passed in');
  }
  if (!vlEntries instanceof Array) {
    throw new TypeError('validation array must be an array');
  }
  if (!vlEntries.every(function (item) {
    return item.name;
  })) {
    throw new TypeError('validation entry must have name prop');
  }
  options = options || {};
  options.mode = options.mode || 'single';
  var resultArray = new ResultArray();
  for (var i = 0, vlEntry; vlEntry = vlEntries[i]; i++) {
    var value = vlEntry.value;
    var validators = vlEntry.validators;
    var result = {
      name: vlEntry.name,
      errors: []
    };
    for (var j = 0, validator; validator = validators[j]; j++) {
      if (!test(value, validator['method'])) {
        result.errors.push(validator.msg);
      }
    }
    if (options.mode === 'single') {
      if (result.errors.length) {
        return result;
      }
    } else {
      resultArray.push(result);
    }
  }
  if (options.mode !== 'single') {
    return resultArray;
  }
}

module.exports = validate;

/***/ }),

/***/ "./src/regexs.js":
/*!***********************!*\
  !*** ./src/regexs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 内置校验方法
 */
var regexs = {
  require: /^.+$/, //必填项
  number: /^\d+$/, //数字
  identity: /^(?:\d{15}|\d{17}[\dxX])$/, //身份证号
  mobile: /^\d{11}$/, //手机号
  email: /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/, //邮箱
  zh: /^[\u4e00-\u9fa5]+$/, //中文
  en: /^[a-zA-Z]+$/, //英文
  enzh: /^[\u4e00-\u9fa5a-zA-Z]+$/, //中英文
  date: /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/ //日期
};

module.exports = regexs;

/***/ })

/******/ });
});
//# sourceMappingURL=validate-str.js.map