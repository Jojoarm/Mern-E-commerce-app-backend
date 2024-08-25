const addToCartModel = require('../../model/cartProductModel');

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req?.userId;
    const allProduct = await addToCartModel
      .find({ userId: currentUser })
      .populate('productId');
    res.status(200).json({
      data: allProduct,
      success: true,
      error: false,
      message: 'Cart product fetched',
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartViewProduct;
