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

## params
validate(vlEntries, options)
* vlEntries An array of validation
* options options

## vlEntries
see above example
### vlEntries[].name
validation name, used by result list
### vlEntries[].value
string to be validated
### vlEntries[].validators
validator list
### vlEntries[].validators[].msg
the message to be returned when validation fail
### vlEntries[].validators[].method
the validate method, can be function, regexp, string

## internal support method
[supported regexp inner](https://github.com/qizf7/regexp-hub), you can use these regexp names as method directly.

## options

### options.mode

#### single
only return the first error object when validation fails.
```javascript
  {
    name: 'id1',
    errors: ['errMsg', 'errMsg']
  }
```
#### multiple
return error object list.
```javascript
  [
    {
      name: 'id1',
      errors: ['errMsg', 'errMsg']
    }, {
      name: 'id2',
      errors: ['errMsg', 'errMsg']
    }
  ]
```

