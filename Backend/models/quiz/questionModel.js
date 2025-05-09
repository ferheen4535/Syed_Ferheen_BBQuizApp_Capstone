import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
    index: true, 
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: (arr) => arr.length >= 2,
      message: 'At least two options are required.', 
    },
  },
}, {
  timestamps: true,
});





const Questions = mongoose.model('Questions', questionSchema);
export default Questions;
