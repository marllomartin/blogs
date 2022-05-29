const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(400).send({ message: Error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    return res.status(201).json(result);
  } catch (Error) {
    return res.status(409).send({ message: Error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(404).send({ message: Error.message });
  }
};

const getByIdUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await userService.getByIdUser(id);
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(404).send({ message: Error.message });
  }
};

module.exports = { login, createUser, getAllUsers, getByIdUser };
