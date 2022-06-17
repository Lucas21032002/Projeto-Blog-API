const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;
const jwtConfig = {
    expiresIn: '3h',
    algorithm: 'HS256',
};

const generateToken = (data) => {
    const token = jwt.sign({ data }, JWT_SECRET, jwtConfig);
    return { token };
};

const validateToken = (data) => {
    const token = jwt.verify(data, JWT_SECRET);
    return token.data.email;
};

module.exports = {
    generateToken,
    validateToken,
};