const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  },
    {
      timestamps: false,
    });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  };

  return PostCategory;
};

module.exports = PostCategory;
