const express = require('express');
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController = require('../controller/user/userSignin');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUsers');
const updateUser = require('../controller/user/updateUser');
const UploadProductController = require('../controller/product/uploadProduct');
const getProductsController = require('../controller/product/products');
const updateProductController = require('../controller/product/updateProduct');
const getCategoryProduct = require('../controller/product/getCategoryProduct');
const getCategoryProducts = require('../controller/product/getCategoryProducts');

const router = express.Router();

router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/logout', userLogout);
router.get('/user-details', authToken, userDetailsController);

//admin panel routes
router.get('/all-users', authToken, allUsers);
router.post('/update-user', authToken, updateUser);

//product
router.post('/upload-product', authToken, UploadProductController);
router.put('/update-product', authToken, updateProductController);
router.get('/products', getProductsController);
router.get('/get-categoryProduct', getCategoryProduct);
router.post('/category-products', getCategoryProducts);

module.exports = router;
