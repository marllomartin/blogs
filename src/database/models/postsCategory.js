const PostsCategory = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define("PostsCategory", {},
    {
      timestamps: false,
    });

  PostsCategory.associate = (models) => {
    PostsCategory.belongsToMany(models.BlogPosts, {
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    PostsCategory.belongsToMany(models.Categories, {
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
  };

  return PostsCategory;
};

module.exports = PostsCategory;
