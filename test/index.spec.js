import chai from 'chai';
import validateStr from '../src/index.js';

describe('test validate', function() {
  it('do not throw error', function() {
    const result = validateStr([{
      name: 'id1',
      value: '1234567890123452',
      validators: [
        {
          msg: 'please input',
          method: 'require'
        },
        {
          msg: 'identity error',
          method: 'identity'
        },
        {
          msg: 'identity error2',
          method: 'mobile'
        }
      ]
    },
    {
      name: 'id2',
      value: '1234567890123451',
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
    }], {mode: 'multiple'})

    chai.assert.equal(result.isValid(), false)
  });
});
