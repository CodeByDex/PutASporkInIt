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
    {   name: "Flamming Fire Flakes",
        seenIn: "Avatar the Last Airbender",
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
    {   name: "Cheesy Blasters",
        seenIn: "30 Rock",
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
    {   name: "Spaghetti Tacos",
        seenIn: "iCarly",
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
    {   name: "Secrete Ingredient Soup",
        seenIn: "KungFu Panda",
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
    {   name: "Car Panini",
        seenIn: "Family Guy",
        description: `One of the many hilarious moments from the animated series is when Peter is making his specialty, the car panini.`,
        ingredients: `
        White bread
        Butter
        1 small can of vienna sausages
        1 bag of Doritos
        1 Cadbury Egg
        4 Reese's Peanut Butter Cups

        `,
        instructions: `
        1. Start by draining your can of vienna sausages and setting them aside. Butter each slice of bread on 1 side and then start layering.
        2. Start with 1 layer of sausage, followed by 4 Reese's Peanut Butter Cups, some crushed Doritos and 1 Cadbury Egg.
        3. Cover with the non buttered side of bread, and place on your panini press. Cook until golden brown and the chocolate has melted inside.
        4. Serve and enjoy!
        ` ,
        sourceURL: "https://www.cartooncuisine.com/fox-animation/peter-griffins-car-panini-from-family-guy/",
        activeTime: 5,
        activeTimeUOM: "min",
        totalTime: 10,
        totalTimeUOM: "min",
        complexity: "easy"
    },
    {   name: "Flanders Hot Cocoa",
        seenIn: "The Simpsons Movie",
        description: `Probably one of the most appetizing things you've ever seen on tv, Ned Flanders hot cocoa recipe.`,
        ingredients: `
        Whole milk
        Heavy cream
        Evaporated milk
        Sweetened condensed milk (optional - if you want an ultra-creamy hot chocolate)
        ½ cup of Ghirardelli cocoa powder
        ½ cup of 70% dark baking chocolate
        ½ cup of sugar
        Pinch of salt
        Small pinch of ground cinnamon
        1 tsp of instant coffee (optional)
        Whipped cream
        Chocolate shavings
        1 small graham cracker
        1 marshmallow
        `,
        instructions: `
        1. Add your 2 parts whole milk, 1 part heavy cream, and 1 part of
        evaporated milk to a saucepan.
        2. Heat milk and whisk while heating. Heat to steaming hot but not boiling - around 190° F.
        3. Add ½ cup of Ghirardelli cocoa powder to milk. Then add ½ cup of 70%
        dark baking chocolate and whisk together.
        4. Add ½ cup of sugar and continue to whisk until everything is mixed in completely.
        5. Add 1 pinch of salt and a small pinch of ground cinnamon. Add instant coffee if you would like. Whisk to combine all ingredients.
        6. Pour hot chocolate into a cup and cover with whipped cream.
        7. Shave chocolate on top of the whipped cream.
        8. Add graham cracker to the top of the whipped cream and coat top with whipped cream.
        9. Stick marshmallow on top of graham cracker. Then toast marshmallow to your liking.
        10. Serve and enjoy!

        ` ,
        sourceURL: "https://www.bingingwithbabish.com/recipes/2017/8/22/flandershotcocoa",
        activeTime: 10,
        activeTimeUOM: "min",
        totalTime: 15,
        totalTimeUOM: "min",
        complexity: "easy"
    },
    {   name: "Rum French Toast",
        seenIn: "Mad Men",
        description: `This recipe for rum french toast comes from a scene in season four where Sally wakes up early to make breakfast for her father. Unknowingly, she mistook a bottle of rum for syrup. She asks if tastes bad in which Don shrugged and replied “no…” and continued to enjoy his breakfast.`,
        ingredients: `
        2 slices - thick white bread
        2 - eggs large
        1/4 cup - heavy cream
        1 tsp - cinnamon
        1/4 tsp - ground nutmeg
        1/2 tsp - salt
        1/2 tsp - vanilla extract
        1 tbsp - granulated sugar
        rum syrup
        3/4 cup - maple syrup
        2 tbsp - rum
        `,
        instructions: `
        1. Combine the maple syrup and rum together into a small pot.  Place it over medium heat and let it come to a simmer.  Turn off the heat and set aside.
        2. Whisk together the eggs, cream, cinnamon, nutmeg, salt, vanilla extract, and granulated sugar until smooth.  Soak each slice of bread in the egg mixture until completely soft and soaked through but it's still holding it's shape.
        3. Heat a skillet on medium high heat with 1 tbsp of butter and 1 tbsp of oil.  Once hot, place the soaked bread onto the hot pan.  Flip once it's golden brown and finish on the other side.  Serve hot with the syrup.
        ` ,
        sourceURL: "https://www.feastofstarlight.com/mad-men-sally-drapers-french-toast-with-rum/",
        activeTime: 15,
        activeTimeUOM: "min",
        totalTime: 25,
        totalTimeUOM: "min",
        complexity: "easy"
    },
    {   name: "Meat Tornado",
        seenIn: "Parks & Rec",
        description: `"You had me at meat tornado"`,
        ingredients: `
        1 lb 93% Ground Beef
        2 whole eggs
        1 tbs fresh oregano chopped
        1 tsp parsley
        pinch salt/pepper
        1/2 tsp cayenne pepper
        1/3 cup parmesan
        5-7 saltine crackers
        1 handful croutons
        1/2 cup onion minced
        2 clove garlic minced
        splash olive oil
        2/3 cup ketchup
        1/4 cup apple cider vinegar
        3 tbs brown sugar
        1/2 cup chicken broth
        4-6 strips bacon
        `,
        instructions: `
        1. IN KITCHEN AID MIX: ground beef eggs oregano parsley salt/pepper cayenne parmesan Broth
        2. IN BLENDER POWDER: Handful Saltine crackers Handful croutons makes about a cup -set aside
        3. IN SAUCE PAN COOK: onions garlic in olive oil
        4. ADD TO SAUCE PAN: ketchup apple cider vinegar brown sugar until thickens slightly. Strain out onions/garlic (with slotted spoon or sieve) and throw those in with meat, set aside glaze.
        5. Add crumbs to meat and beat. Spray loaf pan. Shape into a loaf, glaze, cover with strips of bacon tucking them into the sides.
        6. Cook at 350°F for 70-80 min until internal temp is 165 and bacon is crispy
        ` ,
        sourceURL: "https://cookpad.com/us/recipes/736431-meat-tornado?ref=recipe&via=registration_app_download_intercept",
        activeTime: 40,
        activeTimeUOM: "min",
        totalTime: 1,
        totalTimeUOM: "h",
        complexity: "medium"
    },
    {   name: "Ratatouille",
        seenIn: "Ratatouille",
        description: `The Disney classic that made us all hungry after watching it, we bring you a french delicacy, Ratatouille.`,
        ingredients: `
        4 tbsp olive oil
        4 garlic cloves (minced)
        1/2 small onion (chopped)
        1/3 cup carrot (shredded)
        14 oz crushed tomatoes
        2 tsp dried basil
        1/2 tsp dried parsley
        1 small eggplant (sliced 1/8 inch thick circles)
        2 small zucchini (sliced 1/8 inch thick circles)
        3 Roma tomatoes (sliced 1/8 inch thick circles)
        salt (to taste)
        black pepper (to taste)
        `,
        instructions: `
        1. Preheat the oven to 375F. 
        2. In a large nonstick pan, heat 2 tablespoons of olive oil over medium high heat. 
        3. Add in the onion, garlic, and carrot and cook until tender, about 5 minutes. 
        4. Next, add in the crushed tomatoes and seasonings and simmer for 15 minutes. 
        5. Taste and adjust the seasoning with salt and pepper. 
        6. Once the sauce has thickened, pour into a 2 quart baking dish.
        7. Arrange the sliced vegetables in a circular pattern standing upright in the dish over the sauce. 
        8. Brush with the remaining olive oil. Cover and bake for 30 minutes, then uncover and bake until vegetables are tender. 
        9. Serve immediately.
        ` ,
        sourceURL: "https://www.howtocook.recipes/homemade-ratatouille-recipe/",
        activeTime: 70,
        activeTimeUOM: "min",
        totalTime: 90,
        totalTimeUOM: "min",
        complexity: "medium"
    },
    {   name: "Bubba's Shrimp",
        seenIn: "Forrest Gump",
        description: `From the classic film Forrest Gump, we bring you the legendary shrimp recipe from Bubba Gumps.`,
        ingredients: `
        Broth:
        1 tablespoon butter
        3 garlic cloves, minced
        2 teaspoons tomato paste
        1 chicken bouillon cube, crumbled
        1 teaspoon Cajun seasoning
        1 1/2 teaspoons Worcestershire sauce
        1/4 teaspoon sugar
        1/4 teaspoon cayenne pepper
        1/2 teaspoon black pepper
        8 ounces clam juice
        1/4 cup water
        1/4 cup white wine

        Shrimp:
        2 tablespoons butter
        1 1/2 teaspoons Worcestershire sauce
        1/2 teaspoon black pepper
        1 teaspoon cajun seasoning
        1 garlic clove, minced
        1/2 teaspoon paprika
        1 pound medium shrimp, peeled and deveined
        `,
        instructions: `
        1. Make the broth. In a medium saucepan, melt butter over medium heat. Add garlic and cook 1 minute. 
        2. Stir in the remaining ingredients, making sure everything gets blended.
        3. Bring to a boil and simmer for 5 minutes.
        4. To makes shrimp, melt butter over medium heat in a large pan. Add all ingredients including shrimp. Cook for 2 to 3 minutes, stirring shrimp frequently to cook them evenly.
        5. Combine the broth and shrimp and serve with bread or rice.
        ` ,
        sourceURL: "https://spicysouthernkitchen.com/bubba-gump-copycat-shrimp/",
        activeTime: 10,
        activeTimeUOM: "min",
        totalTime: 15,
        totalTimeUOM: "min",
        complexity: "easy"
    },
    {   name: "Shawarma",
        seenIn: "The Avengers",
        description: `Even have to eat, and when they do they go with an incredible arabic dish, Shawarma.`,
        ingredients: `
        1 kg / 2 lb chicken thigh fillets , skinless and boneless (Note 3)
        Marinade:
        1 large garlic clove , minced (or 2 small cloves)
        1 tbsp ground coriander
        1 tbsp ground cumin
        1 tbsp ground cardamon
        1 tsp ground cayenne pepper (reduce to 1/2 tsp to make it not spicy)
        2 tsp smoked paprika
        2 tsp salt
        Black pepper
        2 tbsp lemon juice
        3 tbsp olive oil
        Yoghurt Sauce:
        1 cup Greek yoghurt
        1 clove garlic , crushed
        1 tsp cumin
        Squeeze of lemon juice
        Salt and pepper
        To Serve:
        4 - 5 flatbreads (Lebanese or pita bread or homemade soft flatbreads)
        Sliced lettuce (cos or iceberg)
        Tomato slices
        Red onion , finely sliced
        Cheese , shredded (optional)
        Hot sauce of choice (optional)
        `,
        instructions: `
        1. Marinade chicken - Combine the marinade ingredients in a large Ziplock bag. Add the chicken, seal, the massage from the outside with your hands to make sure each piece is coated. Marinate 24 hours (minimum 3 hours).
        2. Yogurt Sauce - Combine the Yogurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge).
        3. Preheat stove or BBQ - Heat a large non-stick skillet with 1 tablespoon over medium high heat, or lightly brush a BBQ hotplate/grills with oil and heat to medium high. (See notes for baking)
        4. Cook chicken - Place chicken in the skillet or on the grill and cook the first side for 4 to 5 minutes until nicely charred. Turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time).
        5. Rest - Remove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes.
        To Serve:
        1. Slice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce (or dairy free Tahini sauce from this recipe).
        2. To make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!
        ` ,
        sourceURL: "https://www.recipetineats.com/chicken-sharwama-middle-eastern/",
        activeTime: 10,
        activeTimeUOM: "min",
        totalTime: 20,
        totalTimeUOM: "min",
        complexity: "easy"
    },
    {   name: "Fish Fingers",
        seenIn: "Doctor Who",
        description: `A delicious recipe from the eleventh doctor in the Doctor Who franchise.`,
        ingredients: `
        4 large eggs separated, at room temperature
        3 1/2 cups sifted cake flour
        4 teaspoons baking powder
        1/2 teaspoon salt
        1 cup unsalted butter at room temperature
        2 cups granulated sugar divided
        2 teaspoons pure vanilla extract
        1 cup milk at room temperature
        1/4 teaspoon cream of tartar
        3 tbsp chopped Basil

        For the Lime Glaze:
        2 cups of Powdered sugar sifted
        4.5 tsbp Lime Juice
        more Lime Juice to dilute if needed
        For the Biscuit Crumbs:
        200 g roughly 7.5 oz Honey graham Crackers, Crushed
        4 tbsp Caster sugar
        1 tbsp of Cocoa powder

        For the Custard:
        2 cups of half and half Or half milk and half pouring cream
        1 cup of milk
        3 egg yolks
        1/4 cup of sugar I prefer custard to not be too sweet - You can add more if you prefer
        1.5 - 2 tbsp cornflour for a thick custard
        2 tsp of vanilla or 1/2 vanilla bean
        `,
        instructions: `
        1. Preheat oven to 350°F/180°C.
        2. Line a 2 - 9x 11 jelly roll pan OR Line 3 x 8inch pans with parchment paper, and grease and flour it (if needed).
        3. Separate the eggs, being careful not to get any yolk into the white. Cover the egg whites for later on in the recipe.
        4. Sift the Flour, salt, and baking powder in a bowl. Stir through the Chopped Basil through the flour.
        5. Beat the butter and about 1 1/2 cups of sugar on medium high until mix is fluffy .
        6. Add the yolks one at a time. Scrape down the sides of the bowl and make sure it is all mixed well.
        7. Add the vanilla and beat the mix again until combined.
        8. With the mixer on low, add the flour and milk alternately in 3 additions, ending with the flour.
        9. In a clean bowl whisk the eggwhites until foamy. Add the rest of the sugar (about 1/2 cup)and whisk the eggwhites until stiff peaks form.
        10. Gently fold in about 1/4 of the egg white mix into the cake batter. Then fold in the rest of the egg whites until completely incorporated - be careful not to deflate the batter.
        11. You can divide the batter equally into 3- 8inch pans or 2 -9x 11 inch pans.
        12. Smoothen the top of the batter to make sure they are evenly spread.
        13. Bake in the preheated oven for about 25 minutes for the round cake pans OR about 15 minutes in the 9x 11 pans - OR until an inserted toothpick comes out clean.
        14. Cool the cake for about 10 minutes and turn out the cake onto a wire rack and cool it completely.
        15. Rosie suggests putting the cakes (wrapped in plastic) in the fridge to make frosting easier.
        For the Faux Fish Fingers:
        16. Once they are cooled and chilled I cut the browned edges of the cake and cut it into 1 inch strips and then again to 3 inch pieces. Yielding about 27 cake pieces.

        Assembly:
        Lime Glaze:
        1. Mix the powdered sugar and Lime juice in a flat dish until there are no more lumps.
        2. The glaze shouldn't be too thick. If it is thick add a tsp of lime juice at a time until desired consistency.
        Biscuit Crumbs:
        1. Mix the crushed Graham Crackers, sugar and cocoa powder in a tray until well combined.
        Assembly:
        1. With a spoon pour lime glaze over the Cake fingers (One at a time) until coated all over (As you would with an egg wash for fish fingers)
        2. Transfer to the biscuit crums and press the crumbs into the cake until it is well coated all over.
        3. Place on a wire rack till everything sets.
        4. Chill until ready to serve.

        Custard:
        1. In a medium saucepan, heat the milk and half and half with the sugar. Make sure the sugar dissolves.
        2. In a small bowl whisk the egg yolks, vanilla and cornflour until pale and smooth.
        3. When the milk is steaming, lower the heat (to low).
        4. Add about 1/4 a cup of the steaming milk in a thin stream to the egg yolk mix while whisking to temper the egg yolk. Add about another 1/4 cup of milk to bring the heat of the yolk up.
        5. Add the egg yolk mix in to the milk mix and whisk constantly while heating up the mix till it thickens to desired consistency.
        6. After custard has thickened, place a plastic wrap along the surface of the custard to prevent a film forming on the surface. Cool to room temparature and transfer to the fridge to cool for a few hours.
        7. Serve along side the Vanilla Basil & Lime Cake "Fish Fingers."        
        ` ,
        sourceURL: "https://www.theflavorbender.com/fish-fingers-custard-dr-who-party-part-i-geronimo/",
        activeTime: 60,
        activeTimeUOM: "min",
        totalTime: 90,
        totalTimeUOM: "min",
        complexity: "medium"
    },
    {   name: "Enchiladas",
        seenIn: "Schitts Creek",
        description: `From the hilarious TV Show Schitts Creek we bring you Moira's enchilada recipe! And remember, don't forget to "fold in the cheese."`,
        ingredients: `
        Salsa Roja Ingredients:
        Cherry red guajillo chilis
        Dried ancho chilis
        Pasilla chilis (optional)
        2 medium onions, peeled and chopped
        2 plum tomatoes, halved
        3 cloves garlic, peeled
        Water
        Mexican oregano (optional)
        3 large chicken breasts
        Kosher salt
        Freshly ground black pepper
        Filling and Assembly Ingredients:
        3 large cooked chicken breasts from salsa roja, shredded 
        3 poblano peppers, halved and fire roasted
        3 Tbsp butter ( for the queso)
        3 Tbsp flour (for the queso)
        2 cups whole milk (for the queso)
        8 oz queso de papa cheddar, shredded (for the queso)
        Additional queso de papa, for topping
        Corn tortillas
        Vegetable oil (for frying tortillas)
        Oaxaca Cheese

        `,
        instructions: `
        Salsa Roja Method:
        1. Start by removing the stems and seeds from the chilis and cut into 1” segments. 
        2. Peel and cut 2 medium onions into chunks. Cut 2 plum tomatoes in half. Peel the 3 cloves of garlic. 
        3. Over the stovetop, dry roast the peppers in a dry pan over medium heat for 1-2 minutes. Set aside once roasted.
        4. Into the same pan goes the onions, garlic, and tomatoes to char a little bit. Once the onions and tomatoes have picked up a little color, add back in the chiles along with enough water to cover everything in the pot. 
        5. Bring to a bare simmer ,then add in a generous pinch of Mexican oregano. 
        6. Take 3 large chicken breasts and butterfly cut each piece before killing the heat and adding the chicken to the pot of vegetables, making sure to fully submerge the chicken. 
        7. Once nestled, cover and let sit for 15 minutes before removing the chicken when it has reached an internal temperature of 164°F. 
        8. In a blender, add in the vegetables and chiles before covering just enough with the cooking liquid. Blend until a canned tomato sauce consistency is reached. Season with a few pinches of kosher salt and twists of freshly ground pepper to taste. 
        9. Blend one last time to combine. 
        Enchilada Filling and Assembly:
        10. Start by shredding the 3 large chicken breasts from the red sauce. Remove the stems and seeds of 3 poblano peppers and cut in half. 
        11. Place each half of the poblano pepper over the stovetop and roast until the exteriors are fully blackened. After the pepper is fully roasted, pile them together onto aluminum foil and wrap the peppers up into a package. 
        12. Using gloved hands, scrape off all of the blackened exteriors and slice into small pieces. 
        13. For the queso, in a pot add 3 tablespoons each of flour and butter. Cook and whisk together for 1-2 minutes over low heat. Slowly stream in 2 cups of whole milk while constantly whisking until a thick white sauce has formed. 
        14. Kill the heat, add in 8 ounces of shredded queso de papa and, using a rubber spatula, gently fold in the cheese (stirring gently from the bottom upward over the cheese) until smooth. 
        15. For the corn tortillas, in a saucepan filled with a little vegetable oil over medium heat fry, each tortilla for just a few seconds on each side. Once fried, drain on paper towels. Rinse and repeat with a dozen more tortillas.   
        Assembly:
        16. Start by preparing a dipping and rolling station along with an optional Oaxaca cheese. 
        17. Pour some Salsa Roja into a shallow dish then dip and thoroughly coat a tortilla on both sides with Salsa Roja. 
        18. Layer with shredded chicken, Oaxaca cheese, and poblano peppers in the center of the tortilla before rolling the tortilla around tightly. 
        19. Place the seam side down in a waiting pre-oiled casserole dish. Rinse and repeat until the casserole dish is full. 
        20. Generously drizzle the tortillas with more salsa Roja and topping with more shredded queso de papa then finishing off with a generous drizzle of the cheese sauce. 
        21. Place into a preheated 400°F oven uncovered for 10-15 minutes or until lightly brown and bubbly. 
        22. Let rest at room temperature for 10 minutes before serving.
        ` ,
        sourceURL: "https://www.bingingwithbabish.com/recipes/enchiladas-schitts-creek",
        activeTime: 20,
        activeTimeUOM: "min",
        totalTime: 45,
        totalTimeUOM: "min",
        complexity: "easy"
    },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;