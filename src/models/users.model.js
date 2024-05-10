import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstDoseDate: {
    type: Date,
  },
  secondDoseDate: {
    type: Date,
  },
  isFirstDoseCompleted: {
    type: Boolean,
    default: false,
  },
  isSecondDoseCompleted: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
