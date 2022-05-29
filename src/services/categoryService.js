const { Category } = require('../database/models');

const createCategory = async (newCategory) => {
  const { name } = newCategory;

  const verify = await Category.findAll({
    where: { name },
  });

  if (verify.length > 0) {
    throw new Error('Category already exists');
  }

  await Category.create(newCategory);
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  if (!categories || categories.length === 0) {
    throw new Error('No categories found');
  }

  return categories;
};

module.exports = { createCategory, getAllCategories };
