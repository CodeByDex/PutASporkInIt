const sq = require("../../config/connection");
const seedIngredient = require('../../models/ingredient');

async function seedAll(){
    await sq.sync({force: true});

    process.exit(0);
}

seedAll();