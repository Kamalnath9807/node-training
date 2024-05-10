import Admin from '../models/admin.model.js';
import User from '../models/users.model.js';

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json({ message: 'Admin logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { age, pincode, vaccinationStatus } = req.query;
  try {
    let query = {};
    if (age) {
      query.age = age;
    }

    if (pincode) {
      query.pincode = pincode;
    }

    if (vaccinationStatus) {
      query.vaccinationStatus = vaccinationStatus;
    }

    const users = await User.find(query);

    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: 'No users found with the specified criteria' });
    }

    res.status(200).json({ message: 'Users retrieved successfully', users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
