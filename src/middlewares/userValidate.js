const { User } = require('../database/models');

const userExists = async (req, res, next) => {
    const { email } = req.body;
    const findEmail = await User.findOne({ where: { email } });

    if (findEmail) return res.status(409).json({ message: 'User already registered' });

    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
 // possiveis erros   
    const REQUIRED = { message: '"email" is required' };
    const EMPTY = { message: '"email" is not allowed to be empty' };
    const INVALID = { message: '"email" must be a valid email' };
    const REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email === undefined || null) return res.status(400).json(REQUIRED);
    if (email.length === 0) return res.status(400).json(EMPTY);
    if (!REGEX.test(email)) return res.status(400).json(INVALID);

    next();
};
const validatePassword = async (req, res, next) => {
    const { password } = req.body;
 // possiveis erros
    const REQUIRED = { message: '"password" is required' };
    const EMPTY = { message: '"password" is not allowed to be empty' };
    const SHORT = { message: '"password" length must be at least 6 characters long' };
    const MAGIC_NUMBER = 6;

    if (password === undefined) return res.status(400).json(REQUIRED);
    if (password === '') return res.status(400).json(EMPTY);
    if (password.length < MAGIC_NUMBER) return res.status(400).json(SHORT);

    next();
};
const validateDisplayName = async (req, res, next) => {
    const { displayName } = req.body;
    
    const displayNameRequired = { 
        message: '"displayName" length must be at least 8 characters long', 
    };
    const MAGIC_NUMBER = 8;

    if (displayName.length < MAGIC_NUMBER) {
        return res.status(400).json(displayNameRequired);
    }
    next();
};

module.exports = {
    validateEmail,
    validatePassword,
    validateDisplayName,
    userExists,
};