const express = require('express');

const controller = require('../controllers/loginController');
const loginValidate = require('../middlewares/loginValidate');

const loginRouter = express.Router();

loginRouter.post('/', loginValidate, controller.login);

module.exports = loginRouter;