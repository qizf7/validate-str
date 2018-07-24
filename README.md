# validate string
validate string by regexp or function, return error message list.

### useage
```javascript
  validate([{
    value: '123456789012345',
    validators: [
      {
        msg: 'please input',
        method: 'require'
      },
      {
        msg: 'identity error',
        method: 'identity'
      }
    ]
  },
  {
    value: '123456789012345',
    validators: [
      {
        msg: 'please input',
        method: 'require'
      },
      {
        msg: 'identity error',
        method: 'identity'
      }
    ]
  }], {type: 'single'})

```

### param spec
validate(vlEntries, options)
* vlEntries An array of validation
* options options

## vlEntries
see above example
<dl>
  <dt>value</dt>
  <dd>string to be validated</dd>
</dl>
<dl>
  <dt>validators</dt>
  <dd>validator list</dd>
</dl>
<dl>
  <dt>msg</dt>
  <dd>the message to be returned when validation fails</dd>
</dl>

## option
### option.type
<dl>
  <dt>single</dt>
  <dd>single mode only return the first error msg when validation fails，like ['errMsg', 'errMsg']</dd>
</dl>
<dl>
  <dt>multiple</dt>
  <dd>multiple mode return all error msgs when validation fails，like [['errMsg', 'errMsg'], ['errMsg', 'errMsg']]</dd>
</dl>

