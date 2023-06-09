window.addEventListener("load", () => {
    document.querySelector("#recipeform").addEventListener("submit", async (event) => {
        await recipeSave(event);
    });

    const activetimeUOM = document.querySelector("#recipeActiveTimeUOM");
    activetimeUOM.value = activetimeUOM.dataset.value;

    const totalTimeUOM = document.querySelector("#recipeTotalTimeUOM");
    totalTimeUOM.value = totalTimeUOM.dataset.value;

    const recipeComplexity = document.querySelector("#recipeComplexity");
    recipeComplexity.value = recipeComplexity.dataset.value;

});

// Delete recipe button
document.getElementById("deleteButton").addEventListener("click", async function (event) {
    event.preventDefault();
    if (confirm("Are you sure you wish to delete this recipe?")) {
        const recipeID = event.target.dataset.recipeid;
        const response = await fetch(`/api/recipes/${recipeID}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "CSRF-Token": getCsrfToken()
            }
        });

        if (response.ok) {
            window.location.href = `/dashboard`;
        } else {
            console.log(response);
            alert("Error deleting recipe");
        }
    }
});

async function recipeSave(event) {
    event.preventDefault();

    const id = event.target.dataset.recipeid;
    const name = document.querySelector("#recipeName").value;
    const thumbnailURL = document.querySelector("#recipeThumbnail").value;
    const seenIn = document.querySelector("#recipeSeenIn").value;
    const description = document.querySelector("#recipeDescription").value;
    const activeTime = document.querySelector("#recipeActiveTime").value;
    const activeTimeUOM = document.querySelector("#recipeActiveTimeUOM").value;
    const totalTime = document.querySelector("#recipeTotalTime").value;
    const totalTimeUOM = document.querySelector("#recipeTotalTimeUOM").value;
    const complexity = document.querySelector("#recipeComplexity").value;
    const ingredients = document.querySelector("#recipeIngredients").value;
    const instructions = document.querySelector("#recipeInstructions").value;
    const sourceURL = document.querySelector("#recipeSource").value;

    let method = "POST";
    let uriSuffix = "";

    if (id != 0) {
        method = "PUT";
        uriSuffix = `/${id}`;
    };


    const response = await fetch(`/api/recipes${uriSuffix}`, {
        method: method,
        headers: {
            "content-type": "application/json",
            "CSRF-Token": getCsrfToken()
        },
        body: JSON.stringify({
            name,
            thumbnailURL,
            seenIn,
            description,
            instructions,
            sourceURL,
            activeTime,
            activeTimeUOM,
            totalTime,
            totalTimeUOM,
            complexity,
            ingredients
        })
    });

    if (response.ok) {
        let resData = await response.json();
        window.location.href = `/recipe/${resData.id}`;
    } else {
        alert("Error Saving Recipe");
    }
}
