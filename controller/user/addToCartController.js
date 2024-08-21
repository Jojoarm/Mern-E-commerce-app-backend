const addToCartModel = require('../../model/cartProductModel');

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req?.userId;

    const isProductAvailable = await addToCartModel.findOne({ productId });
    console.log('isProductAvailable', isProductAvailable);

    if (isProductAvailable) {
      return res.json({
        message: 'Product already exist in Cart',
        success: false,
        error: true,
      });
    }

    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    return res.status(200).json({
      data: saveProduct,
      message: 'Product added to cart',
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

module.exports = addToCartController;
