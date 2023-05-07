window.addEventListener("load", () => {
    document.querySelector("#recipeform").addEventListener("submit", async (event) =>{
        event.preventDefault()

        const id = event.target.dataset.recipeid;
        const name = document.querySelector("#recipeName").value;
        const seenIn = document.querySelector("#recipeSeenIn").value;
        const description = document.querySelector("#recipeDescription").value;
        const activeTime = document.querySelector("#recipeActiveTime").value;
        const activeTimeUOM = document.querySelector("#recipeActiveTimeUOM").value;
        const totalTime = document.querySelector("#recipeTotalTime").value;
        const totalTimeUOM = document.querySelector("#recipeTotalTimeUOM").value;
        const complexity = document.querySelector("#recipeComplexity").value;
        const ingredients = document.querySelector("#recipeIngredients").value;
        const instructions = document.querySelector("#recipeInstructions").value;
        const thumbnailURL = document.querySelector("#recipeThumbnail").value;

        console.log(id, name, seenIn, description, activeTime, activeTimeUOM, totalTime, totalTimeUOM, complexity);

        let method = "POST";
        let uriSuffix = "";

        if (id != 0) {
            method = "PUT";
            uriSuffix = `/${id}`;
        };


        const response = await fetch(`/api/recipes${uriSuffix}`, {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                seenIn,
                description,
                ingredients,
                instructions,
                sourceURL: "",
                activeTime,
                activeTimeUOM,
                totalTime,
                totalTimeUOM,
                complexity,
                thumbnailURL
            })        
        });
        
        if (response.ok) {
            alert("Recipe Saved Successfully");
        } else {
            alert("Error Saving Recipe"); 
        }       
    })    
})
