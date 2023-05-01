const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')
const UserPassword = require('./userPassword');

class User extends Model {
  //TODO: Add VerifyPassword method


  static async createUser(userName, email, password) {
    //TODO: Add Password Requirement Validations

    const hash =  await bcrypt.hash(password, 5)

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

module.exports = User;