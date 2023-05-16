const { Model, DataTypes, Op } = require('sequelize');
const sequelize = require('./connection');
const { v4: uuidv4 } = require("uuid");

class SecretToken extends Model {
    static async GetTokens() {

        //get rid of tokens older than a day old
        await SecretToken.destroy({
            where: {
                createdAt: {
                    [Op.lt]: (new Date(Date.now() - 24 * 60 * 60 * 1000))
                }
            }
        });

        //generate a new token
        await SecretToken.create({ token: uuidv4() });

        //get all recent tokens in most recent first
        let tokens = await SecretToken.findAll({
            order: [["createdAt", "DESC"]]
        });

        tokens = tokens.map(x => x.get());

        return tokens.map(x => x.token);
    };

}

SecretToken.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize
});

module.exports = SecretToken;