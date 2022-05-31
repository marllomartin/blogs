const blogPostService = require('../services/blogPostService');

const getAllBlogPosts = async (req, res) => {
  try {
    const result = await blogPostService.getAllBlogPosts();
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(404).send({ message: Error.message });
  }
};

const getByIdBlogPost = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await blogPostService.getByIdBlogPost(id);
    return res.status(200).json(result);
  } catch (Error) {
    return res.status(404).send({ message: Error.message });
  }
};

module.exports = { getAllBlogPosts, getByIdBlogPost };
