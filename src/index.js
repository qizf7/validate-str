const regexs = require('./regexs');
const ResultArray = require('./ResultArray');

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
    return method(v)
  } else {
    throw new TypeError('unsupported method')
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
  if(!vlEntries instanceof Array) {
    throw new TypeError('validation array must be an array');
  }
  if(!vlEntries.every(item => item.name)){
    throw new TypeError('validation entry must have name prop');
  }
  options = options || {};
  options.mode = options.mode || 'single';
  let resultArray = new ResultArray();
  for (let i = 0, vlEntry; vlEntry = vlEntries[i]; i++) {
    let value = vlEntry.value;
    let validators = vlEntry.validators;
    let result = {
      name: vlEntry.name,
      errors: []
    };
    for (let j = 0, validator; validator = validators[j]; j++) {
      if(!test(value, validator['method'])){
        result.errors.push(validator.msg)
      }
    }
    if (options.mode === 'single') {
      if(result.errors.length) {
        return result;
      }
    } else {
      resultArray.push(result);
    }
  }
  return resultArray;
}

module.exports = validate;
