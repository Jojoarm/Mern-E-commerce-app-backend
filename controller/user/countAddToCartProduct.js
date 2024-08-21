const addToCartModel = require('../../model/cartProductModel');

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req?.userId;
    const count = await addToCartModel.countDocuments({ userId });
    return res.status(200).json({
      data: {
        count: count,
      },
      error: false,
      success: true,
      message: 'Cart contents counted',
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = countAddToCartProduct;
