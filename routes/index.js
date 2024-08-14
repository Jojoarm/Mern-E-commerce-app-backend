const express = require('express');
const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignin');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');

const router = express.Router();

router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/logout', userLogout);
router.get('/user-details', authToken, userDetailsController);

//admin panel routes
router.get('/all-users', authToken, allUsers);
router.post('/update-user', authToken, updateUser);

module.exports = router;
