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

module.exports = regexs;
