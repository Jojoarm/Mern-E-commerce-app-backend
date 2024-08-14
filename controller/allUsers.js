const userModel = require('../model/userModel');

async function allUsers(req, res) {
  try {
    const allUsers = await userModel.find();

    res.status(200).json({
      message: 'All Users Fetched',
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allUsers;
