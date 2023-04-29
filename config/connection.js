require("dotenv").config();

/**
 * Need to add these variables to you local env
 * Example Only
DB_Name = "dbName"
DB_User = "AppUserName"
DB_PW = "AppUserPW"
 */

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_Name, 
        process.env.DB_User,
        process.env.DB_PW,
        {
            host: "localhost",
            dialect: "mysql",
            define: {
                underscored: false,
                freezeTableName: true,
                timestamps: true
            }
        }
        );

module.exports = sequelize;