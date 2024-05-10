import User from '../models/users.model.js';
import VaccineSlot from '../models/vaccinatedSlots.model.js';

export const createVaccineSlots = async () => {
  for (let day = 1; day <= 30; day++) {
    for (let hour = 10; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour < 10 ? '0' + hour : hour}:${
          minute === 0 ? '00' : minute
        }`;

        const slot = new VaccineSlot({
          date: new Date(2024, 4, day),
          time: time,
          availableDoses: 10,
        });
        await slot.save();
      }
    }
  }
};

export const registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const user = await User.findOne({ phoneNumber, password });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
