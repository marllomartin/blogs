const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false,
    });

  User.associate = (models) => {
    User.hasMany(models.BlogPosts, {
      foreignKey: 'postId',
    });
  };

  return User;
};

module.exports = User;
