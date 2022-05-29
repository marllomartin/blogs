require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

const authToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.decode(token, secret);
    const user = await User.findOne({ where: { email: decoded.data.email } });

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.userId = user.id;
    next();
  } catch (Error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authToken;
