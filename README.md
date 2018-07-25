# validate string
validate string by regexp or function, return error message list.

### usage
```javascript
  validate([{
    name: 'id1',
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
    name: 'id2',
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
  }], {mode: 'single'})

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

## options
### options.mode
<dl>
  <dt>single</dt>
  <dd>single mode only return the first error msg when validation fails，like {name: 'id1', errors: ['errMsg', 'errMsg']}.</dd>
</dl>
<dl>
  <dt>multiple</dt>
  <dd>multiple mode return ResultArray entry. </dd>
</dl>

### ResultArray
<dl>
  <dt>ResultArray#isValid</dt>
  <dd>.</dd>
</dl>
<dl>
  <dt>ResultArray#getErrorsByName</dt>
  <dd>.</dd>
</dl>

