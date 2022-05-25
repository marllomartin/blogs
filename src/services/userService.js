const { User } = require('../database/models');
const generateToken = require('../helpers/generateToken');

const login = async ({ email, password }) => {
  const result = await User.findAll({
    where: {
      email,
      password,
    },
  });

  if (!result || result.length === 0) {
    throw new Error('Invalid fields');
  }

  const token = generateToken({ email });
  return { token };
};

module.exports = { login };
