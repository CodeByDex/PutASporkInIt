window.addEventListener("load", () => {
    const recipeForm = document.querySelector("#recipeform");

    recipeForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const id = event.target.dataset.recipeid;
        const name = document.querySelector("#recipeName").value;
        const seenIn = document.querySelector("#recipeSeenIn").value;
        const description = document.querySelector("#recipeDescription").value;
        const activeTime = document.querySelector("#recipeActiveTime").value;
        const activeTimeUOM = document.querySelector("#recipeActiveTimeUOM").value;
        const totalTime = document.querySelector("#recipeTotalTime").value;
        const totalTimeUOM = document.querySelector("#recipeTotalTimeUOM").value;
        const complexity = document.querySelector("#recipeComplexity").value;

        console.log(id, name, seenIn, description, activeTime, activeTimeUOM, totalTime, totalTimeUOM, complexity);

        let uriSuffix = "";
        let method = "POST"
        if (id !== -1){
            uriSuffix = `/${id}`;
            method = "PUT"
        }

        const response = await fetch(`./api/recipes${uriSuffix}`, {
            method: method,
            headers: {
                "content=type": "application/json"
            },
            body: JSON.stringify({
                name,
                seenIn,
                description,
                instructions: "",
                sourceURL: "",
                activeTime,
                activeTimeUOM,
                totalTime,
                totalTimeUOM,
                complexity
            })
        });



    })
});