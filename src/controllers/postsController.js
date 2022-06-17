const { BlogPost, User, Category } = require('../database/models');

const create = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const newPost = await BlogPost.create({ title, content, categoryIds });

    return res.status(201).json(newPost);
};

const getAll = async (req, res) => {
    const allPosts = await BlogPost.findAll({ 
        include: 
        [{ model: User, as: 'user', attributes: { exclude: 'password' } },
         { model: Category, as: 'categories', through: { attributes: [] } },    
        ],
    });
    return res.status(200).json(allPosts);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const findById = await BlogPost.findByPk(id);
    return res.status(200).json(findById);
};

module.exports = {
    create,
    getAll,
    getById,
};