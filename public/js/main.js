window.addEventListener("load", () => {
    document.querySelector("#logout").addEventListener("click", async () =>{
        document.location.replace('/login');
        
        const response = await fetch('./api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
        // If successfully logged out, redirect to the login page
        document.location.replace('/login')
        
        } else {
        alert(response.statusText);
        }
    })
})


window.addEventListener("load", () => {
    document.querySelector("#homePage").addEventListener("click", async () =>{
        document.location.replace('/');
    })
})

window.addEventListener("load", () => {
    document.querySelector("#home").addEventListener("click", async () =>{
        document.location.replace('/');
    })
})

window.addEventListener("load", () => {
    document.querySelector("#browse").addEventListener("click", async () =>{
        document.location.replace('/browse');
    })
})

window.addEventListener("load", () => {
    document.querySelector("#dashBoard").addEventListener("click", async () =>{
        document.location.replace('/dashboard');
    })
})


// Identify Favorite button Class Elements
const favoriteButtons = document.querySelectorAll(".favorite-button");

// If a Favorite Button is clicked, toggle heart between being filled or unfilled
favoriteButtons.forEach(favoriteButton => {
    favoriteButton.addEventListener("click", async (event) => {
        favoriteButton.querySelector('i').classList.toggle('fa-solid');
        favoriteButton.querySelector('i').classList.toggle('fa-regular');
        favoriteButton.querySelector('i').classList.toggle('dark:text-green-500');

        // commented out this userID until user middleware code is added
        // const userID = event.target.dataset.userid;
        const userID = 1;
        const recipeID = event.target.dataset.recipeid;
        
        if (favoriteButton.querySelector('i').classList === 'fa-solid') {
            // Send favorited or to database
        const response = await fetch('./api/users/:userID/Favorites"', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                userID: userID,
                recipeID: recipeID
            }) 
        })   
            .then(response => {
                if (response.ok) {
                    console.log("the favorited recipe was sent to user database")
                } else {
                    alert(response.statusText);
                }  
            });
        } else if (favoriteButton.querySelector('i').classList === 'fa-regular') {

            // Send unfavorited recipe to database to be deleted
            const response = await fetch('./api/users/:userID/Favorites"', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    userID: userID,
                    recipeID: recipeID
                })  
            })
            .then(response => {
                if (response.ok) {
                    console.log("the unfavorited recipe was sent to user database")
                } else {
                    alert(response.statusText);
                }  
            });  
        } else {
            // TO DO
            console.log ("Something very odd happened")
        }  
    });
});


