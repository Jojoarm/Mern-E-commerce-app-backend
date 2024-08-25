const mongoose = require('mongoose');

const cartProductSchema = new mongoose.Schema(
  {
    productId: { ref: 'product', type: String },
    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const addToCartModel = mongoose.model('addToCart', cartProductSchema);

module.exports = addToCartModel;
