const express = require('express');

const controller = require('../controllers/categorieController');
const middleware = require('../middlewares/categoryMiddleware');
const auth = require('../middlewares/authMiddleware');

const categorieRouter = express.Router();

categorieRouter.post('/', auth, middleware, controller.create);
categorieRouter.get('/', auth, controller.getAll);

module.exports = categorieRouter;