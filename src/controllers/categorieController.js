const { Category } = require('../database/models');

const create = async (req, res) => {
    const { name } = req.body;
    const addCategory = await Category.create({ name });
    return res.status(201).json(addCategory);
};

const getAll = async (req, res) => {
    const allCategories = await Category.findAll();
    return res.status(200).json(allCategories);
};

module.exports = {
    create,
    getAll,
};