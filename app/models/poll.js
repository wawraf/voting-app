import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: {
    type: String,
    default: 'Answer'
  },
  votes: {
    type: Number,
    default: 0,
  }
});

AnswerSchema.plugin(uniqueValidator)

AnswerSchema.method('vote', function (callback) {
  this.votes += 1;
  this.parent().save(callback);
});

const PollSchema = new Schema({
  question: {
    type: String,
    unique: true,
    default: 'Question'
  },
  answers: [AnswerSchema],
  owner: String
});

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;