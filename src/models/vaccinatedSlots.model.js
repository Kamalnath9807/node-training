import mongoose from 'mongoose';

const vaccineSlotSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  availableDoses: {
    type: Number,
    required: true,
    default: 10,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const VaccineSlot = mongoose.model('VaccineSlot', vaccineSlotSchema);

export default VaccineSlot;
