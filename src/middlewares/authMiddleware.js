const { validateToken } = require('../auth');

const authToken = (req, res, next) => {
     try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: 'Token not found' });
        const decoded = validateToken(token);
        req.user = decoded;
        return next();
     } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
     }
};

module.exports = authToken;