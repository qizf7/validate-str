# string validate program

### 功能
> 用正则，方法或内置方法校验字符串

### 用法
```javascript
  validate([{
    value: '123456789012345',
    validations: [
      {
        msg: '请输入',
        method: 'require'
      },
      {
        msg: '身份证号错误',
        method: 'identity'
      }
    ]
  },
  {
    value: '123456789012345',
    validations: [
      {
        msg: '请输入',
        method: 'require'
      },
      {
        msg: '身份证号错误',
        method: 'identity'
      }
    ]
  }], {type: 'single'})
  
```

### 参数说明
validate(vlEntries, option)
* vlEntries 检验数组
* option 选项

## vlEntries 
格式如上例
<dl>
  <dt>value</dt>
  <dd>被校验的字符串</dd>
</dl>
<dl>
  <dt>validations</dt>
  <dd>校验规则数组</dd>
</dl>
<dl>
  <dt>msg</dt>
  <dd>校验失败返回结果</dd>
</dl>

## option
### option.type
<dl>
  <dt>single</dt>
  <dd>single模式只返回校验数组中的第一个对象的结果，格式为 ['msg1', 'msg2']</dd>
</dl>
<dl>
  <dt>multiple</dt>
  <dd>multiple模式返回完整校验结果，格式为[['msg1', 'msg2'], [msg1, msg2]]</dd>
</dl>

