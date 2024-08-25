const addToCartModel = require('../../model/cartProductModel');

const updateCartProduct = async (req, res) => {
  try {
    const currentUser = req?.userId;
    const addToCartProductId = req?.body._id;
    const qty = req?.body.quantity;

    const updateProduct = await addToCartModel.updateOne(
      { _id: addToCartProductId },
      {
        //only update when the quatity of the product is more than 0
        ...(qty && { quantity: qty }),
      }
    );

    res.json({
      message: 'Cart quantity updated',
      data: updateProduct,
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = updateCartProduct;
