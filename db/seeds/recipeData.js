const { Recipe } = require('../../models');

const recipeData = [
    {   name: "Ted's Biscuits",
        description: `Iconic Biscuit Recipe from Apple TV's series, "Ted Lasso".
        In the show, Ted Lasso, a small-time college football coach from the Midwest hired to coach a pro soccer team in England despite knowing nothing about soccer, tries to win over the team's owner, Rebecca Welton, by making his famous biscuit recipe. `,
        ingredients: `
        2 sticks (8 ounces) unsalted butter, plus more for the pan
        3/4 cup powdered sugar
        2 cups all-purpose flour
        1/4 teaspoon coarse salt`,
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
    {   name: "Baby you can chive my car(Bob's Burgers)",
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
    {   name: "Kevin's Famous Chilli(The Office)",
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
    {   name: "Rachel's English Trifle(Friends)",
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
    {   name: "Krabby Patty(Spongebob Squarepants)",
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
        1.
        Make the Burger Patties: Heat a grill pan or sauté pan over medium heat. As it heats, combine ground beef, Old Bay, pepper and salt. Form into four equally sized patties, about 1/3 lb apiece. Set on a platter next to the stove-top. Coat the warmed grill pan with cooking spray and place patties on the pan, cooking each side about 4-5 minutes, or until cooked through to your desired doneness.
        2.
        Use a large star-shaped cookie cutter to cut each cheese slice into a star shape. Place the star-shaped cheese on each burger patty, in the last 30 seconds or so of cooking, so it melts a little. Set burger patties aside.
        3.
        Make King Neptune's Poseidon Powder Aioli: Stir mayo and Old Bay until thoroughly combined.
        4.
        Assemble the Sandwich: Spread Poseidon Powder Aioli on the bottom of each bun. Top with a burger patty, ketchup, mustard, pickles, onion slices, tomato and lettuce. Place the top bun on each burger. Serve.
        
        ` ,
        sourceURL: "https://www.delish.com/cooking/recipe-ideas/recipes/a48056/spongebob-inspired-krabby-patties-recipe/",
        activeTime: 20,
        activeTimeUOM: "min",
        totalTime: 20,
        totalTimeUOM: "min",
        complexity: "easy"
    },
    {   name: "Flamming Fire Flakes(Avatar the Last Airbender)",
        description: `From the hit American anime brings you one of the pride recipes of the Fire Nation.`,
        ingredients: `
        100 g long grain white rice
        400 g water
        ½ small cinnamon stick
        ½ star anise pod
        1 tsp fennel seeds
        Generous shake Sichuan peppercorns
        1 tsp cayenne pepper
        1 tsp sweet paprika
        `,
        instructions: `
        1. In a medium saucepan, cook long grain white rice in water for 15 minutes
        2. Grind cinnamon stick, star anise, fennel seeds and Sichuan peppercorns into a fine powder then sift to remove large pieces
        3. Mix in cayenne pepper and sweet paprika
        4. Liquefy the cooked rice with few teaspoons of the spice mix
        5. Pour onto a silicone liner then use a spatula to shape into a thin sheet
        6. Put in a dehydrator under 122 degrees Fahrenheit for 2 hours
        7. Peel off the sheet from the silicone liner and break off parts which are fully dehydrated
        8. Put the still most parts back in dehydrator for 30 minutes
        9. Break by hand into flakes
        10. Deep fry in oil until puffed up then drain in paper towels to remove excess oil
        11. Sprinkle with more of the spice mix and a bit of salt while warm
     
        
        ` ,
        sourceURL: "https://www.gmanetwork.com/entertainment/celebritylife/food/67172/how-to-make-flaming-fire-flakes-from-avatar-the-last-airbender/story",
        activeTime: 45,
        activeTimeUOM: "min",
        totalTime: 3,
        totalTimeUOM: "h",
        complexity: "medium"
    },
    {   name: "Cheesy Blasters(30 Rock)",
    description: `"You take a hot dog, stuff it with some Jack cheese, fold it in a pizza, you've got cheesy blasters!" From the critically acclaimed show 30 Rock is the Cheesy Blaster!`,
    ingredients: `
    Pizza dough
    Flour
    Spicy Italian Sausage
    Pepperoni
    Genoa salami
    Hard salami
    Low moisture mozzarella
    Pizza sauce
     Ricotta cheese
    Eggs
    `,
    instructions: `
    1. Make some pizza dough.
    2. Cut dough into 4 equal pieces. Roll out one piece on a floured surface until it's a circle.
    3. Once your dough is rolled out, cook some spicy italian sausage in a pan, and be sure to crumble it up.
    4. While your sausage is cooking, dice up some pepperoni, genoa salami, and some hard salami (any 3 salamis will do).
    5. Add some pizza sauce to your dough and top with some low moisture mozzarella followed by your 3 salamis, spicy Italian sausage, and some ricotta cheese.
    6. Fold dough over and turn in the edges similar to an empanada. Cut three slits for steam in the top. Cover with an egg wash and place in a 500°F oven for about 20 minutes.
    7. Let sit for 10-15 minutes to cool. Serve and enjoy!
    ` ,
    sourceURL: "https://www.bingingwithbabish.com/recipes/cheesyblasters",
    activeTime: 30,
    activeTimeUOM: "min",
    totalTime: 1,
    totalTimeUOM: "h",
    complexity: "easy"
},
{   name: "Spaghetti Tacos(iCarly)",
    description: `An iconic recipe that we all have wanted to try, here it is, the spaghetti tacos recipe!`,
    ingredients: `
    Basil
    4 cloves garlic, chopped
    1 tsp red pepper flakes
    2 tsp dried oregano, divided in half
    ½ small onion, minced
    1 can San Marzano tomatoes
    4 Tbsp tomato paste
    Olive oil
    1 pound ground beef
    1 egg
    1 cup Panko bread crumbs, divided
    1 tsp garlic powder
    1 tsp milk
    1 box spaghetti
    1 quart vegetable oil
    2 Tbsp butter
    Parmesan cheese, shredded
    `,
    instructions: `
    1. For the sauce, add 2 Tbsp of olive oil to a deep saute pan along with ½ of a small onion. Cook until soft and translucent before adding 1 tsp each of red pepper flakes and dried oregano, 4 cloves of chopped garlic, and 4 Tbsp of tomato paste. Mix to combine.
    2. In a food processor, add your San Marzano tomatoes and pulse 5 times before adding to your pan. Add your chopped basil turn to medium low and let cook for an hour stirring every 10 minutes.
    3. For your meatballs combine 1 pound of ground beef with 1 egg, ½ cup panko bread crumbs, 1 tsp garlic powder, 1 tsp milk, and 1 tsp oregano. Mix with your hands to combine and then roll into 1 inch balls. Toss them in the rest of the breadcrumbs.
    4. In a large pot, bring 1 quart of vegetable oil to 350°F and then add your meatballs. Cook for 3-5 minutes. Once cooked, remove and place on a wire rack over a rimmed baking sheet.
    5. Cook your spaghetti until it's almost done, reserving ¼ cup of the pasta water.
    6. In a saute pan add some of the sauce along with the pasta and ¼ cup of pasta water. Mix to combine and add 2 Tbsp of butter along with some salt and a good glug of olive oil. Mix or toss to combine
    7. In a non stick pan add about 2 ounces of shredded parmesan cheese. Let it melt until the edges are starting to brown and then flip and cook for another 2 minutes. Remove from pan and place over a rolling pin and let it cool and harden. Once hardened add some pasta and sauce to it with your meatballs and top with some parmesan cheese.
    8. Serve and enjoy!
    ` ,
    sourceURL: "https://www.bingingwithbabish.com/recipes/spaghettitaco",
    activeTime: 20,
    activeTimeUOM: "min",
    totalTime: 45,
    totalTimeUOM: "min",
    complexity: "easy"
},
{   name: "Secrete Ingredient Soup(KungFu Panda)",
    description: `From the hilarious animated movie KungFu Panda we bring you the one and only Special Ingredient Soup!`,
    ingredients: `
    2 carrots, peeled and diced
    ¼ of an onion, diced
    3 stalks of celery, diced
    1 clove of garlic, minced
    Pinch of salt
    Pinch of pepper
    1 ½ tbsp of canola oil (you can substitute this with other oils if you don't have canola oil) 
    6 cups of chicken broth 
    ½ cup of water
    1 tbsp of soy sauce
    2 packets of egg noodles
    `,
    instructions: `
    1. Prepare all your ingredients separately beforehand for a smoother cooking experience. 
    2. Dice the carrots and celery according to your desired size. 
    3. Dice the onion and mince the garlic into small pieces. 
    4. Combine the oil, onion, garlic, carrot and celery in the large pot and cook until the vegetables are soft. 
    5. Add in salt and pepper. 
    6. Once you smell the fragrance of the onion and garlic, add the chicken stock and water in, and bring the mixture to a boil. 
    7. Add the soy sauce and noodles into the mix and cook for about 5 to 10 minutes more until the noodles are cooked through. 
    8. Serve immediately. 
    ` ,
    sourceURL: "https://sethlui.com/simple-stay-home-recipes-kungfu-panda-secret-ingredient-noodle-soup/",
    activeTime: 15,
    activeTimeUOM: "min",
    totalTime: 30,
    totalTimeUOM: "min",
    complexity: "easy"
},
{   name: "Car Panini(Family Guy)",
    description: `From the hilarious animated movie KungFu Panda we bring you the one and only Special Ingredient Soup!`,
    ingredients: `
    2 carrots, peeled and diced
    ¼ of an onion, diced
    3 stalks of celery, diced
    1 clove of garlic, minced
    Pinch of salt
    Pinch of pepper
    1 ½ tbsp of canola oil (you can substitute this with other oils if you don't have canola oil) 
    6 cups of chicken broth 
    ½ cup of water
    1 tbsp of soy sauce
    2 packets of egg noodles
    `,
    instructions: `
    1. Prepare all your ingredients separately beforehand for a smoother cooking experience. 
    2. Dice the carrots and celery according to your desired size. 
    3. Dice the onion and mince the garlic into small pieces. 
    4. Combine the oil, onion, garlic, carrot and celery in the large pot and cook until the vegetables are soft. 
    5. Add in salt and pepper. 
    6. Once you smell the fragrance of the onion and garlic, add the chicken stock and water in, and bring the mixture to a boil. 
    7. Add the soy sauce and noodles into the mix and cook for about 5 to 10 minutes more until the noodles are cooked through. 
    8. Serve immediately. 
    ` ,
    sourceURL: "https://sethlui.com/simple-stay-home-recipes-kungfu-panda-secret-ingredient-noodle-soup/",
    activeTime: 15,
    activeTimeUOM: "min",
    totalTime: 30,
    totalTimeUOM: "min",
    complexity: "easy"
},
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;