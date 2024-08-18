const productModel = require('../../model/productModel');

const getCategoryProducts = async (req, res) => {
  try {
    const { category } = req?.body || req?.query;
    const products = await productModel.find({ category });

    res.json({
      data: products,
      message: 'Products fetched',
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
};

module.exports = getCategoryProducts;
