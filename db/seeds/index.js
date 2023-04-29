const sq = require("../../config/connection");

const seedIngredient = require('../../models/ingredient');
const user = require('../../models/user');
const recipe = require('../../models/recipe');
const userPassword = require('../../models/userPassword');

async function seedAll(){
    await sq.sync({force: true});

    process.exit(0);
}

seedAll();