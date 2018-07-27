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

/***/ "./node_modules/regexp-hub/index.js":
/*!******************************************!*\
  !*** ./node_modules/regexp-hub/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'require': /^.+$/, // required
  'username': /^[a-zA-Z0-9_-]{3,16}$/, // username
  'positiveInteger': /^\d+$/, // positive integer
  'negativeInteger': /^-\d+$/, // negative integer
  'integer': /^-?\d+$/, // integer
  'positiveNumber': /^\d*\.?\d+$/, // positive or negative number
  'negativeNumber': /^-\d*\.?\d+$/, // positive or negative number
  'positiveOrNegativeNumber': /^-?\d*\.?\d+$/, // positive or negative number
  'yyyy/mm/dd hh:mm:ss': /^([0-9][0-9][0-9][0-9])([ \/\-])(0?[1-9]|1[012])\2(0?[1-9]|[12][0-9]|3[01])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/, // yyyy/mm/dd hh:mm:ss
  'dd/mm/yyyy hh:mm:ss': /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/, // dd/mm/yyyy hh:mm:ss
  '24hourTime': /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // 24hour time
  'htmlTag': /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/, // html tag
  'url': /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, //url
  'email': /^.+@.+$/, // email
  'IPv4': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  'IPv6': /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  'en': /^[a-zA-Z]+$/, // en

  'zh': /^[\u4e00-\u9fa5]+$/, // chinese
  'zh-identity': /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/, // china id card 
  'zh-mobile': /^1\d{10}$/, //china mobile number
  'zh-postcode': /^\d{6}$/ //china postcode
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validate = __webpack_require__(/*! ./validate */ "./src/validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _validate2.default;

/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regexpHub = __webpack_require__(/*! regexp-hub */ "./node_modules/regexp-hub/index.js");

var _regexpHub2 = _interopRequireDefault(_regexpHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {String}
 * @param {(String|Function|RegExp)}
 * @returns {Boolean}
 */
function test(v, method) {

  if (v === '' && method !== 'require') return true;

  if (typeof method === 'string') {
    if (method in _regexpHub2.default) {
      return _regexpHub2.default[method].test(v);
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
 * @param  {Array} validArr
 * @param  {Objecg} options
 * @return {Array}
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
  var resultArray = [];
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

/***/ })

/******/ });
});
//# sourceMappingURL=validate-str.js.map