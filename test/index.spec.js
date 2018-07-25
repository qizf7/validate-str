import chai from 'chai';
import validateStr from '../src/index.js';

describe('test validate', function() {
  it('do not throw error', function() {
    const result = validateStr([{
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
    // chai.assert.equal(result.isValid(), false)
  });
});
