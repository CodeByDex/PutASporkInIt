const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')
const UserPassword = require('./userPassword');

class User extends Model {

  async checkPassword(password) {
    const UP = await UserPassword.findOne({ where: { userID: this.id } });
    const passwordCheck = await bcrypt.compareSync(password, UP.password);
    return passwordCheck;
  }

  static async createUser(userName, email, password) {

    if (password.length < 8) {
      throw new Error('Variable length must be at least 8 characters')
    }

    const hash = await bcrypt.hash(password, 5)

    //We want to make sure ceate user and password both occur
    //so isolating to a single transaction.
    const t = await sequelize.transaction();

    try {

      const newUser = await User.create({
        userName,
        email
      },
        {
          transaction: t
        });

      await UserPassword.create({
        userID: newUser.id,
        password: hash
      },
        {
          transaction: t
        });

      t.commit();

      return newUser;
    } catch (err) {
      t.rollback();
      console.log(err)
      throw new Error("Error Creating New User");
    }
  }
}

class UserRecipeFavorite extends Model { };

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    sequelize,
    paranoid: true,
  }
);

UserRecipeFavorite.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    }
  },
  recipeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Recipe",
      key: "id"
    }
  }
},
  {
    sequelize
  }
);

module.exports = {
  User,
  UserRecipeFavorite
};