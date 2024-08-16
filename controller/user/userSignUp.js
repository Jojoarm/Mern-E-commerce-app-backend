const bcrypt = require('bcryptjs');
const userModel = require('../../model/userModel');

async function userSignUpController(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error('User already exist');
    }

    if (!email) {
      throw new Error('Please provide email');
    }
    if (!password) {
      throw new Error('Please provide password');
    }
    if (!name) {
      throw new Error('Please provide name');
    }

    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error('Something is wrong with your password');
    }

    const payload = {
      ...req.body,
      role: 'General',
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const savedUser = await userData.save();

    res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: 'User created successfully',
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
