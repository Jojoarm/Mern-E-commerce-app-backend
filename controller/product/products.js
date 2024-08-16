const productModel = require('../../model/productModel');
const productsModel = require('../../model/productModel');

const getProductsController = async (req, res) => {
  try {
    const products = await productModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: 'Products fectched succesffully',
      success: true,
      error: false,
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getProductsController;
