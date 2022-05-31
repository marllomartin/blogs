const { BlogPost, User, Category } = require('../database/models');

const getAllBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      required: false,
      attributes: { exclude: ['password'] },
    },
  {
    model: Category,
    as: 'categories',
  }],
  });

  if (!blogPosts || blogPosts.length === 0) {
    throw new Error('No Posts found');
  }

  return blogPosts;
};

const getByIdBlogPost = async (id) => {
  const blogPost = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      required: false,
      attributes: { exclude: ['password'] },
    },
  {
    model: Category,
    as: 'categories',
  }],
  });
  
  if (!blogPost || blogPost.length === 0) {
    throw new Error('Post does not exist');
  }

  return blogPost;
};

module.exports = { getAllBlogPosts, getByIdBlogPost };
