const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(400).send({ message: Error.message });
  }
};

module.exports = { login };
