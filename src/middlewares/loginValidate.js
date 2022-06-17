const { User } = require('../database/models');

const validateLogin = async (req, res, next) => {
    const { email, password } = req.body;
    
// verifica se os campos estão preenchidos
    if (!email || !password) {
 return res.status(400).json({ 
        message: 'Some required fields are missing', 
    }); 
}
// caso os campos estejam devidamente preenchidos a verificação passa pra proxima etapa
// verifica se o email é cadastrado
    const user = await User.findOne({ where: { email } });

// caso "user" não tenha resposta, então deve-se lançar um erro
    if (!user || user.password !== password) {
 return res.status(400).json({ 
        message: 'Invalid fields', 
    }); 
} 

    req.user = user;
    next();
};

module.exports = validateLogin;