const userModel = require('../../model/userModel');

async function userDetailsController(req, res) {
  try {
    const user = await userModel.findById(req.userId);
    // console.log('user', user);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: 'User details fetched',
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userDetailsController;
