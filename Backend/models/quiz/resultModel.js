import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  title: String,
  scentMatch: String,
  description: String
});

const Result = mongoose.model('Result', resultSchema);

export default Result;