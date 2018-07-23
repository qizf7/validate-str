/**
 * 字符串校验
 * @author Qizhong Fang <qizhong.fang@outlook.com>
 * @version 0.0.2
 */

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
}

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
      throw new TypeError('Not a valid method string!!!!!!!!!!!');
    }
  } else if (method instanceof RegExp) {
    return method.test(v);
  } else if (typeof method === 'function') {
    return method(v)
  } else {
    throw new TypeError('Unsupported method')
  }
}

/**
 * 校验方法
 * @param  {Array} validArr 校验数组
 * @param  {Objecg} option   选项
 * @return {Array} 验证结果
 */
function validate(vlEntries, option) {
  if (!vlEntries) {
    throw new TypeError('Need validation array passed in');
  }
  if(!vlEntries instanceof Array) {
    throw new TypeError('Validation array mast be an array');
  }
  option = option || {};
  option.type = option.type || 'single';
  var errorsArray = [];
  var errors = [];
  for (var i = 0, vlEntry; vlEntry = vlEntries[i]; i++) {
    var value = vlEntry.value;
    var validations = vlEntry.validations;
    for (var j = 0, validation; validation = validations[j]; j++) {
      if(!test(value, validation['method'])){
        errors.push(validation['msg']);
      }
    }
    if (option.type === 'single') {
      if(errors.length) {
        return errors;
      }
    } else {
      if(errors.length) {
        errorsArray.push(errors.slice());
        errors.length = 0;
      }
    }
  }
  if (errorsArray.length) {
    return errorsArray;
  }
}

module.exports = validate;
