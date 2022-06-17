const { User } = require('../database/models');
const { generateToken } = require('../auth');

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const addUser = await User.create({ displayName, email, password, image });
    const token = generateToken(addUser);

    return res.status(201).json(token);
};

const getAll = async (req, res) => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
   
    const userById = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!userById) return res.status(404).json({ message: 'User does not exist' });
    
    return res.status(200).json(userById);
};

module.exports = { 
    create,
    getAll,
    getById,
 };