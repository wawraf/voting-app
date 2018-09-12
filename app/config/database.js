import mongoose from 'mongoose';
import constants from './constants';

// Remove warning with Promise
mongoose.Promise = global.Promise;

try {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
	.once('open', () => {
  console.log('MongoDB is connected!');
})
	.on('error', (err) => {
  throw err
});