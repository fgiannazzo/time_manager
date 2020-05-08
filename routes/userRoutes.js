const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// OPEN TO PUBLIC
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.isLoggedIn);

// EVERYTHING BELOW WILL REQUIRE AUTHENTICATION
router.use(authController.protect);

router.patch('/updatePassword/', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.post('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

// EVERYTHING BELOW REQUIRES ADMIN RIGHTS
router.use(authController.restrictTo('admin'));

router.route('/users').get(userController.getAllUsers);

router
  .route('/users/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
