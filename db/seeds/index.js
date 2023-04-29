const sq = require("../../config/connection");

async function seedAll(){
    await sq.sync({force: true});

    process.exit(0);
}

seedAll();