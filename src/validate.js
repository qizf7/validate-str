import regexs from 'regexp-hub';

/**
 * @param {String}
 * @param {(String|Function|RegExp)}
 * @returns {Boolean}
 */
function test(v, method) {

  if (v === '' && method !== 'require') return true;

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
 * @param  {Array} validArr
 * @param  {Objecg} options
 * @return {Array}
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
  let resultArray = [];
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
  if (options.mode !== 'single') {
    return resultArray;
  }
}

module.exports = validate;
