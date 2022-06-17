const express = require('express');
const userRoutes = require('./user');
const loginRoutes = require('./login');
const categorieRoutes = require('./categories');
const postsRoutes = require('./posts');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/categories', categorieRoutes);
router.use('/post', postsRoutes);

module.exports = router;