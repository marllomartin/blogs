const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const result = await categoryService.createCategory(req.body);
    return res.status(201).json(result);
  } catch (Error) {
    return res.status(409).send({ message: Error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(404).send({ message: Error.message });
  }
};

module.exports = { createCategory, getAllCategories };
