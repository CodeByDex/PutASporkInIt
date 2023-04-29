const { Recipe } = require('../models');

const recipeData = [
    {   id: 1, 
        name: "Ted's Biscuits",
        description: `Iconic Biscuit Recipe from Apple TV's series, "Ted Lasso".
        In the show, Ted Lasso, a small-time college football coach from the Midwest hired to coach a pro soccer team in England despite knowing nothing about soccer, tries to win over the team's owner, Rebecca Welton, by making his famous biscuit recipe. `,
        instructions: `Preheat oven to 300 F. 
        Sift flour and salt, mix into bowl and set aside. 
        Mix butter on high speed until fluffy (3 to 5 minutes). Gradually add sugar slowly, continuing to mix until pale and fluffy.
        Add flour all at once and mix until combined.
        Butter a square pan.
        Pat and roll shortbread into pan no more than 1/2-inch thick.
        Refrigerate for at least 30 minutes.
        Cut into squares.
        Bake until golden and make sure the middle is firm, approximate bake time 45 to 60 minutes.
        Cool completely. Re-slice them, if necessary, and serve.` ,
        sourceURL: "https://www.today.com/food/here-s-official-ted-lasso-biscuit-recipe-t230627",
        activeTime: 30,
        activeTimeUOM: "minutes",
        totalTime: 2,
        totalTimeUOM: "hours",
        complexity: "medium"
    }
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = recipeData;