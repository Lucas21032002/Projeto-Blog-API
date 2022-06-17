const express = require('express');

const controller = require('../controllers/userController');
const middleware = require('../middlewares/userValidate');
const auth = require('../middlewares/authMiddleware');

const userRouter = express.Router();

userRouter.post('/', 
middleware.validateDisplayName,
middleware.validateEmail,
middleware.validatePassword,
middleware.userExists,
controller.create);

userRouter.get('/', auth, controller.getAll);
userRouter.get('/:id', auth, controller.getById);

module.exports = userRouter;

// parei no req5 