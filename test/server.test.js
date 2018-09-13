import Poll from '../app/config/model'

const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const portfinder = require('portfinder')
const dotenv = require('dotenv')

dotenv.config({path: '.env'})
chai.use(chaiHttp);

describe('/// SERVER RESPONSE & MONGO TEST UNIT ///', function () {
  
  before(async () => {
    process.env.PORT = await portfinder.getPortPromise({port: 10002})
    const app = require('../server');
  });

  after(async () => {
    require('../server').stop;
  });
  
  /* Mongo DB test */
  let id;
  describe('2. HTTP requests and MongoDB testing', function(){
    it('Server is working', function(done){
      chai.request(require('../server'))
      .get('/')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.response, 'GET for home route')
        done()
      })
    })
    
    let pollID, answerID, votesCur;
    describe('2.1 POST requests', () => {
      it('Creating new poll with mongoose', function(done){
        chai.request(require('../server'))
        .post('/new')
        .send()
        .end((err, res) => {
          assert.equal(res.status, 201)
          expect(res.body).have.property('_id')
          //expect(body).have.property('question')
          expect(res.body).have.property('answers')
          
          pollID = res.body._id
          
          done()
        })
      })
      
      it('Creating new answer in single poll', function(done){
        chai.request(require('../server'))
        .post('/poll/' + pollID + '/new')
        .send()
        .end((err, res) => {
          assert.equal(res.status, 201)
          expect(res.body).is.an('object')
          expect(res.body._id).is.equal(pollID)
          expect(res.body.answers).is.an('array')
          expect(res.body.answers[0]).have.property('votes')
          expect(res.body.answers[0].votes).equal(0)
          expect(res.body.answers[0]).have.property('_id')
          
          answerID = res.body.answers[0]._id
          votesCur = res.body.answers[0].votes
          
          done()
        })
      })
      
      it('Creating new answer in single poll (repeat)', function(done){
        chai.request(require('../server'))
        .post('/poll/' + pollID + '/new')
        .send()
        .end((err, res) => {
          assert.equal(res.status, 201)
          expect(res.body).is.an('object')
          expect(res.body._id).is.equal(pollID)
          expect(res.body.answers).is.an('array')
          expect(res.body.answers[0]).have.property('votes')
          expect(res.body.answers[0].votes).equal(0)
          expect(res.body.answers[0]).have.property('_id')
          expect(res.body.answers[1]).have.property('votes')
          expect(res.body.answers[1].votes).equal(0)
          expect(res.body.answers[1]).have.property('_id')
          
          done()
        })
      })
      
    })
    
    describe('2.2 PUT requests', () => {
      it('Upvoting an answer in single poll', function(done){
        chai.request(require('../server'))
        .put(`/poll/${pollID}/${answerID}/vote`)
        .send()
        .end((err, res) => {
          assert.equal(res.status, 200)
          expect(res.body).is.an('object')
          expect(res.body._id).is.equal(pollID)
          expect(res.body.answers).is.an('array')
          expect(res.body.answers[0]).have.property('votes')
          expect(res.body.answers[0].votes).equal(votesCur + 1)
          expect(res.body.answers[0]).have.property('_id')
          assert.equal(res.body.answers[0]._id, answerID)
          
          done()
        })
      })
      
      it('Upvoting an answer in single poll (repeat)', function(done){
        chai.request(require('../server'))
        .put(`/poll/${pollID}/${answerID}/vote`)
        .send()
        .end((err, res) => {
          assert.equal(res.status, 200)
          expect(res.body).is.an('object')
          expect(res.body._id).is.equal(pollID)
          expect(res.body.answers).is.an('array')
          expect(res.body.answers[0]).have.property('votes')
          expect(res.body.answers[0].votes).equal(votesCur + 2)
          expect(res.body.answers[0]).have.property('_id')
          assert.equal(res.body.answers[0]._id, answerID)
          
          done()
        })
      })
    })
    
    describe('2.3 GET requests', () => {
      it('Getting all polls', function(done){
        chai.request(require('../server'))
        .get('/polls')
        .end((err, {status, body}) => {
          assert.equal(status, 200)
          expect(body).is.an('array')
          expect(body[0]._id).equal(pollID)
          expect(body[0].answers).is.an('array')
          expect(body[0].answers[0]._id).equals(answerID)
          
          done()
        })
      })
      
      it('Getting poll by ID', function(done){
        chai.request(require('../server'))
        .get('/poll/' + pollID)
        .end((err, {status, body}) => {
          assert.equal(status, 200)
          expect(body).is.an('object')
          expect(body._id).equal(pollID)
          expect(body.answers).is.an('array')
          expect(body.answers[0]._id).equals(answerID)
          expect(body.answers[0].votes).equal(votesCur + 2)
          expect(body.answers[1].votes).equal(0)
          
          done()
        })
      })
    })
      
    describe('2.4 DELETE requests', () => {
      it('Deleting single poll', function(done){
        chai.request(require('../server'))
        .delete('/poll/' + pollID)
        .send()
        .end((err, res) => {
          assert.equal(res.status, 200)
          expect(res.body).is.an('object')
          expect(res.body._id).is.equal(pollID)
          done()
        })
      })
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