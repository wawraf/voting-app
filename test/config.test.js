import Poll from '../app/models/poll'

const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()

describe('/// CONFIG FILES TEST UNIT ///', function () {
  
  /* Mongoose model test */
  describe('1. Mongoose model testing', function(){
    const poll = new Poll({
      question: 'This is just a test', 
      answers: [
      ]
    })
    
    it('Poll from mongoose is an object', function(){
      expect(poll).to.be.an('object', 'This is an object')
    })
    
    it('Poll from mongoose have properties question and answers', function(){
      expect(poll).to.have.property('question').that.is.a('string')
      expect(poll).to.have.property('answers').that.is.an('array')
    })
  })
})



// /* Need to be run as mocha --ui tdd (instead of default bdd run as just mocha) */
// var chai = require('chai');
// var assert = chai.assert;

// suite('Unit Tests', function(){
  
//   // Make ALL tests pass
//   // !! Don't scramble the Assertions. We rely on their order to check the results !!
//   suite('Mongoose', function() {
//     /** assert.fail() will always fail. Change it into something more useful... **/
  
//     /** 1 - Use assert.isNull() or assert.isNotNull() to make the tests pass. **/
//     test('#isNull, #isNotNull', function(){
//       assert.isNull(null, 'this is an optional error description - e.g. null is null');
//       assert.isNotNull( 1, '1 is not null');
//     });
  
//     /** 2 - Use assert.isDefined() or assert.isUndefined() to make the tests pass. **/
//     test('#isDefined, #isUndefined', function(){
//       assert.isDefined( null, 'null is not undefined');
//       assert.isUndefined( undefined, 'undefined IS undefined');
//       assert.isDefined( 'hello', 'a string is not undefined' );
//     });
  
//     /** 3 - Use assert.isOk() or assert.isNotOk() to make the tests pass. **/
//     // .isOk(truthy) and .isNotOk(falsey) will pass
//     test('#isOk, #isNotOk', function(){
//       assert.isNotOk( null, 'null is falsey');
//       assert.isOk( "I'm truthy", 'a string is truthy');
//       assert.isOk( true, 'true is truthy' );
//     });
  
//     /** 4 - Use assert.isTrue() or assert.isNotTrue() to make the tests pass. **/
//     // .isTrue(true) and .isNotTrue(everything else) will pass.
//     // .isFalse() and .isNotFalse() also exist.
//     test('#isTrue, #isNotTrue', function(){
//       assert.isTrue( true, 'true is true');
//       assert.isTrue( !!'double negation', 'double negation of a truthy is true');
//       assert.isNotTrue({ value: 'truthy' }, 'A truthy object is NOT TRUE (neither is false...)' );
//     });
  
//     // There are more assertions like these: .isNaN(), .isBoolean(), 
//     // and many others. Almost all the assertions in the chai library
//     // have their negative counterpart - e.g. .isNotBoolean(), ...
//   });
  
//   // -----------------------------------------------------------------------------
  
//   suite('Equality', function() {
//     /** 5 - .equal(), .notEqual() **/
//     // .equal() compares objects using '=='
//     test('#equal, #notEqual', function(){
//       assert.equal( 12, '12', 'numbers are coerced into strings with == ');
//       assert.notEqual( {value: 1}, {value:1}, '== compares object references');
//       assert.equal( 6 * '2', '12', 'no more hints...');
//       assert.notEqual( 6 + '2', '12', 'type your error message if you want' );
//     });
//     /** 6 - .strictEqual(), .notStrictEqual() **/
//     // .strictEqual() compares objects using '==='
//     test('#strictEqual, #notStrictEqual', function(){
//       assert.notStrictEqual( 6, '6' );
//       assert.strictEqual( 6, 3*2 );
//       assert.strictEqual( 6 * '2', 12 );
//       assert.notStrictEqual( [1, 'a', {} ], [1, 'a', {}] );
//     });
//     /** 7 - .deepEqual(), .notDeepEqual() **/
//     // .deepEqual() asserts that two object are deep equal
//     test('#deepEqual, #notDeepEqual', function(){
//       assert.deepEqual( { a: '1', b: 5 } , { b: 5, a: '1' }, "keys order doesn't matter" );
//       assert.notDeepEqual( { a: [5, 6] }, { a: [6, 5] }, "array elements position does matter !!" );
//     });
//   });
// });