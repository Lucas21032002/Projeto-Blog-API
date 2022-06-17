const { BlogPost } = require('../database/models');

const validadeIdPost = async (req, res) => {
    const { id } = req.params;
    const postExists = await BlogPost.findByPk(id);

    if (postExists) return res.status(404).json({ message: 'post does not exist' });
};

const validateFields = async (req, res) => {
    const { title, content, categoryIds } = req.body;

    if (title === undefined) {
 return res.status(400).json({ 
        message: 'Some required fields are missing', 
    }); 
}
    if (content === undefined) {
 return res.status(400).json({ 
        message: 'Some required fields are missing', 
    }); 
}
    if (categoryIds === undefined) {
 return res.status(400).json({ 
        message: '"categoryIds" not found', 
    }); 
}
};

module.exports = {
    validadeIdPost,
    validateFields,
};