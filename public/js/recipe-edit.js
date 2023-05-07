window.addEventListener("load", () => {
    document.querySelector("#recipeform").addEventListener("submit", async (event) =>{
        await recipeSave(event);       
    });

    const activetimeUOM = document.querySelector("#recipeActiveTimeUOM");
    activetimeUOM.value =  activetimeUOM.dataset.value;

    const totalTimeUOM = document.querySelector("#recipeTotalTimeUOM");
    totalTimeUOM.value =  totalTimeUOM.dataset.value;

});

async function recipeSave(event) {
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

    let method = "POST";
    let uriSuffix = "";

    if (id != -1) {
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
            instructions: "",
            sourceURL: "",
            activeTime,
            activeTimeUOM,
            totalTime,
            totalTimeUOM,
            complexity
        })
    });

    if (response.ok) {
        alert("Recipe Saved Successfully");
    } else {
        alert("Error Saving Recipe");
    }
}

