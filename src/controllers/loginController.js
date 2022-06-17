const auth = require('../auth');

const login = async (req, res) => {
    const { email } = req.body;
    const token = auth.generateToken(email);
        
    return res.status(200).json(token);
};

module.exports = {
    login,
};