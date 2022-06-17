const express = require('express');

const controller = require('../controllers/postsController');
const { validateFields, validadeIdPost } = require('../middlewares/postsMiddleware');
const auth = require('../middlewares/authMiddleware');

const postsRouter = express.Router();

postsRouter.post('/', auth, validateFields, controller.create);
postsRouter.get('/', auth, controller.getAll);
postsRouter.get('/:id', auth, validadeIdPost, controller.getById);

module.exports = postsRouter;