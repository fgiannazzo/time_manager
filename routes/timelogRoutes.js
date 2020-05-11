const express = require('express');
const timelogController = require('../controllers/timelogController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);
router.use(authController.protect);

router.post('/', timelogController.createTimelog);
router.delete('/:id', timelogController.deleteTimelog);
router.patch('/:id', timelogController.updateTimelog);
router.get('/:userId', timelogController.getTimelogs);

module.exports = router;
