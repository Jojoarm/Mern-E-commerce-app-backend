const productModel = require('../../model/productModel');

const filterProductController = async (req, res) => {
  try {
    const categoryList = req?.body?.category || [];
    const product = await productModel.find({
      category: {
        $in: categoryList,
      },
    });
    res.json({
      data: product,
      success: true,
      error: false,
      message: 'Category fetched',
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = filterProductController;
