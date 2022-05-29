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

module.exports = { createCategory };
