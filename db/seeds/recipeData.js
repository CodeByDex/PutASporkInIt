const { Recipe } = require('../../models');

const recipeData = [
    {   name: "Ted's Biscuits",
        seenIn: "Ted Lasso",
        description: `Iconic Biscuit Recipe from Apple TV's series, "Ted Lasso".
        In the show, Ted Lasso, a small-time college football coach from the Midwest hired to coach a pro soccer team in England despite knowing nothing about soccer, tries to win over the team's owner, Rebecca Welton, by making his famous biscuit recipe. `,
        ingredients: `
        2 cups all-purpose flour
        1/4 teaspoons coarse salt
        1 cup (2 sticks) unsalted butter, room temperature
        3/4 cup confectioners' sugar
        `,
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
        activeTimeUOM: "min",
        totalTime: 2,
        totalTimeUOM: "h",
        complexity: "medium"
    },
    {   name: "Baby you can chive my car",
        seenIn: "Bob's Burgers",
        description: `Iconic Hamburger Recipe from the hit Show: "Bob's Burgers".
        Bob's Burgers is an animated sitcom. The show follows Bob Belcher and his family of 4 own hamburger restaurant and go on many various adventures.`,
        ingredients: `For Fried Pickles:
        1 egg
        Flour
        Cajun seasoning
        Peanut Oil
        1 Pickle.

        For Burger:
        Ground meat
        Feta cheese 
        Kosher salt
        Pepper
        1/2 cup sour cream
        1/4 cup dijon mustard
        Hamburger buns
        Minced chives.
        `,
        instructions: `For Fried Pickles: 
        1. Cut your pickle up into even slices.
        2. Bread pickles in a beaten egg and flour mixed with cajun seasoning.
        3. Starting with the flour, dip your pickle in the flour, then in the egg, then back in the flour.
        4. Make sure your oil is heated to 350°F.
        5. Gently drop your pickles into the oil, agitating them so they don't stick together.
        6. Take pickles out and lay them on a plate lined with paper towels.

        For Burger: 
        1. Make a very thin and very flat patty topped with feta cheese. Place another very thin very flat patty on top, and seal the edges to create a feta stuffed burger.
        2. Season with kosher salt and fresh pepper.
        3. Create sauce by combining ½ cup of sour cream and ¼ cup dijon mustard.
        4. Lightly toast buns in oil on a skillet.
        5. After you remove buns, add your burger to the skillet. Flip once brown and crusted.
        6. Put burger together, adding sour cream sauce, and some minced chives.
        7. Add fried pickle slices to the side thus creating Baby You Can Chive My Car Burger.
        ` ,
        sourceURL: "https://youtu.be/basFyoMSjds",
        activeTime: 15,
        activeTimeUOM: "min",
        totalTime: 30,
        totalTimeUOM: "min",
        complexity: "medium"
    },
    {   name: "Kevin's Famous Chilli",
        seenIn: "The Office",
        description: `The office is an American mockumentary sitcom series that depicts the everyday work lives of office employees at the Scranton Pennsylvania branch of a fictional paper company Dunder Mifflin. This episode starts with character Kevin coming into the office bringing his world famous chilli for the rest of the office.`,
        ingredients: `
        4 dried ancho chiles
        2 Tbs neutral oil (vegetable, canola or grapeseed)
        3 lbs ground beef (80/20 or 85/15 lean)
        2 medium yellow onions, finely chopped
        6 cloves garlic
        1 large jalapeño, finely chopped
        1 Tbs dried oregano
        2 tsp ground cumin
        ¼ tsp cayenne pepper
        2 Tbs tomato paste
        2 12 oz. bottles of beer (lager or pale ale)
        3 cans Pinto beans, drained and rinsed
        3 cups beef stock
        2 ½ cups chopped ripe tomatoes
        2 Tbs kosher salt
        Chopped scallions, shredded Jack cheese and sour cream (for topping)

        `,
        instructions: `
        1. Combine beef and onion in a large saucepan over medium heat.
        2. Sauté until meat and onion are browned (the trick is to undercook the onions).
        3. Stir in tomatoes, tomato sauce, toasted ancho chilis, and water.
        4. Season with chili powder, garlic powder, salt, and ground black pepper to taste.
        5. Boil on a low-heat.
        6. Simmer for 15 minutes while covered.
        7. Add toppings of your choice.
        ` ,
        sourceURL: "https://youtu.be/eQ9eY0_DoEk",
        activeTime: 3,
        activeTimeUOM: "h",
        totalTime: 3,
        totalTimeUOM: "h",
        complexity: "medium"
    },
    {   name: "Rachel's English Trifle",
        seenIn: "Friends",
        description: `Memorable scene form the Friends where Rachel bring a dish to thanksgiving, but does not realize that the that she accidentally had pages stuck together and ends up combining to different recipes.`,
        ingredients: `
        1 Package Lady Fingers
        2 Cups Custard from scratch
        1/2 Cup Raspberry OR Strawberry Jam
        1 Cup Fresh Raspberries
        1 Cup Ground Beef sauteed with Peas & Onions salt & pepper for seasonings
        1 Banana sliced
        1 Cup Whipped Cream
        1 - 1 1/2 Cup Milk
        `,
        instructions: `
        1. In a trifle bowl, dip each ladyfinger in milk for about 3 seconds and place them as the first layer.
        2. Once the layer of ladyfingers is placed, add in a layer of red jam of your choice and spread it evenly.
        3. After the jam, add in a layer of fresh custard and make sure all the surface area is covered.
        4. Next, add in your raspberries and make sure that the raspberries are lined about the edges of the bowl.
        5. Now, add in the next layer of ladyfingers, the same way dipped in milk and make sure everything is covered.
        6. For the most interesting part! Add in your ground beef sauteed with peas and onions.
        7. Lastly, add in the last of the custard and store in the fridge for minimally 4 hours.
        8. Right before serving, add in sliced bananas and whipped cream. Enjoy!
        
        ` ,
        sourceURL: "https://youtu.be/G4BxOhJOmUw",
        activeTime: 45,
        activeTimeUOM: "min",
        totalTime: 4,
        totalTimeUOM: "h",
        complexity: "medium"
    },
    {   name: "Krabby Patty",
        seenIn: "Spongebob Squarepants",
        description: `The iconic burger recipe from the classic tv cartoon Spongebob Squarepants.`,
        ingredients: `
        1 1/3 lb. ground beef (80 percent lean)
        2 tsp. Old Bay seasoning
        1 tsp. Black pepper
        1 tsp. Sea salt
        4 slices cheddar cheese
        1/2 c. mayonnaise
        1 tsp. Old Bay seasoning
        4 sesame seed buns, sliced in half
        ketchup
        mustard
        1 jar dill pickle slices
        1 red onion, sliced
        1 tomato, sliced
        4 leaves of butter lettuce
        `,
        instructions: `
        1. Make the Burger Patties: Heat a grill pan or sauté pan over medium heat. As it heats, combine ground beef, Old Bay, pepper and salt. Form into four equally sized patties, about 1/3 lb apiece. Set on a platter next to the stove-top. Coat the warmed grill pan with cooking spray and place patties on the pan, cooking each side about 4-5 minutes, or until cooked through to your desired doneness.
        2. Use a large star-shaped cookie cutter to cut each cheese slice into a star shape. Place the star-shaped cheese on each burger patty, in the last 30 seconds or so of cooking, so it melts a little. Set burger patties aside.
        3. Make King Neptune's Poseidon Powder Aioli: Stir mayo and Old Bay until thoroughly combined.
        4. Assemble the Sandwich: Spread Poseidon Powder Aioli on the bottom of each bun. Top with a burger patty, ketchup, mustard, pickles, onion slices, tomato and lettuce. Place the top bun on each burger. Serve.
        
        ` ,
        sourceURL: "https://www.delish.com/cooking/recipe-ideas/recipes/a48056/spongebob-inspired-krabby-patties-recipe/",
        activeTime: 20,
        activeTimeUOM: "min",
        totalTime: 20,
        totalTimeUOM: "min",
        complexity: "easy"
    },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;