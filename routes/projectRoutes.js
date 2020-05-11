const express = require('express');
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);
router.use(authController.protect);

router.post('/', projectController.createProject);
router.delete('/:id', projectController.deleteProject);
router.patch('/:id', projectController.updateProject);
router.get('/:userId', projectController.getProjects);

module.exports = router;
