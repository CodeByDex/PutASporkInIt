// Variable set of which Recipe Preview Image User clicked
let imageClicked = document.querySelector("img");


imageClicked.addEventListener("click", async (event) => {
   let recipeID ;

    // Response should take user to the full page view of recipe corresponding to the recipe preview image
    const response = await fetch("./api/recipes", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
        })        
    });
        if (response.ok) {
      // Send a GET request to the server with the recipe ID as a parameter
        window.location.href = `./api/recipes/${recipeId}`;
        }
        else {
            // TODO add handling for bad response 
            }   
    })
    
} )



