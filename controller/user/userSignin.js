const bcrypt = require('bcryptjs');
const userModel = require('../../model/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error('Please provide email');
    }
    if (!password) {
      throw new Error('Please provide password');
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error('User does not exist');
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 10,
      });
      const tokenOption = {
        httpOnly: true,
        secure: true,
      };
      res.cookie('token', token, tokenOption).json({
        message: 'Login Successfully',
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error('Password incorrect!');
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
