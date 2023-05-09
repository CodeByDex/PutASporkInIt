window.addEventListener("load", () => {
    const btnLogout = document.querySelector("#logout");

    if (btnLogout) {
        btnLogout.addEventListener("click", async () => {

            const response = await fetch('/api/users/logout', {
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
    }
    // Identify upvote/downvote buttons
    const upvoteButtons = document.querySelectorAll(".upvote-button");
    const downvoteButtons = document.querySelectorAll(".downvote-button");

    upvoteButtons.forEach(upvoteButton => {
        upvoteButton.addEventListener("click", async (event) => {
            const userID = getCookieValue("userID");
            if (isNaN(userID)) {
                return;
            }

            const recipeID = event.target.dataset.recipeid;

            if (!event.target.classList.contains('fa-solid')) {
                // Send favorited to database
                await addUpvote(recipeID, event);

            } else if (!event.target.classList.contains('fa-regular')) {

                await removeUpvote(recipeID, event);
            } 
        })
    })

    downvoteButtons.forEach(downvoteButton => {
        downvoteButton.addEventListener("click", async (event) => {
            const userID = getCookieValue("userID");
            if (isNaN(userID)) {
                return;
            }

            const recipeID = event.target.dataset.recipeid;


            if (!event.target.classList.contains('fa-solid')) {
                // Send favorited to database
                await addDownvote(recipeID, event);

            } else if (!event.target.classList.contains('fa-regular')) {

                await removeDownvote(recipeID, event);
            } 
        })
    })
})


// Identify Favorite button Class Elements
const favoriteButtons = document.querySelectorAll(".favorite-button");

// If a Favorite Button is clicked, toggle heart between being filled or unfilled
favoriteButtons.forEach(favoriteButton => {
    favoriteButton.addEventListener("click", async (event) => {

        const userID = getCookieValue("userID");
        if (isNaN(userID)) {
            return;
        }

        const recipeID = event.target.dataset.recipeid;

        if (!event.target.classList.contains('fa-solid')) {
            // Send favorited to database
            await addToFavorites(userID, recipeID, event);

        } else if (!event.target.classList.contains('fa-regular')) {
            await removeFromFavorites(event, userID);
        }
    });
});

async function removeFromFavorites(event, userID) {
    const favoriteID = event.target.dataset.favoriteid;
    // // Send unfavorited recipe to database to be deleted
    const response = await fetch(`/api/users/${userID}/Favorites/${favoriteID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        toggleFavoriteDisplay(event);
        event.target.dataset.favoriteid = 0;
    } else {
        alert(response.statusText);
    }
}

async function addToFavorites(userID, recipeID, event) {
    const response = await fetch(`/api/users/${userID}/Favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recipeID: recipeID
        })
    });

    if (response.ok) {
        toggleFavoriteDisplay(event);
        const responseData = await response.json();
        event.target.dataset.favoriteid = responseData.id;
    } else {
        alert(response.statusText);
    }
}

function toggleFavoriteDisplay(event) {
    event.target.classList.toggle('fa-solid');
    event.target.classList.toggle('fa-regular');
    event.target.classList.toggle('dark:text-green-500');
}

async function addUpvote(recipeID, event) {
    await deleteVote(recipeID)
    const response = await fetch(`/api/recipes/${recipeID}/votes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vote: 1
        })
    });

    if (response.ok) {
        toggleUpvoteDisplay(event);
        const responseData = await response.json();
        event.target.dataset.vote = responseData.id;
    } else {
        alert(response.statusText);
    }
}

async function addDownvote(recipeID, event) {
    await deleteVote(recipeID)
    const response = await fetch(`/api/recipes/${recipeID}/votes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vote: -1
        })
    });

    if (response.ok) {
        toggleDownvoteDisplay(event);
        const responseData = await response.json();
        event.target.dataset.vote = responseData.id;
    } else {
        alert(response.statusText);
    }
}

async function removeDownvote(recipeID, event) {
    const response = await deleteVote(recipeID)

    if (response.ok) {
        toggleDownvoteDisplay(event);
        event.target.dataset.vote = 0;
    } else {
        alert(response.statusText);
    }
}

async function removeUpvote(recipeID, event) {
    const response = await deleteVote(recipeID)

    if (response.ok) {
        toggleUpvoteDisplay(event);
        event.target.dataset.vote = 0;
    } else {
        alert(response.statusText);
    }
}


async function deleteVote(recipeID) {
    const response = await fetch(`/api/recipes/${recipeID}/votes/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response
}

function toggleUpvoteDisplay(event) {
    event.target.classList.toggle('fa-solid');
    event.target.classList.toggle('fa-regular');
    event.target.classList.toggle('dark:text-green-500');

    const pairedDownvoteButton = event.target.parentNode.parentNode.children[2].children[0]

    pairedDownvoteButton.classList.remove("dark:text-red-500")
    pairedDownvoteButton.classList.remove("fa-solid")
    pairedDownvoteButton.classList.add("fa-regular")
}

function toggleDownvoteDisplay(event) {
    event.target.classList.toggle('fa-solid');
    event.target.classList.toggle('fa-regular');
    event.target.classList.toggle('dark:text-red-500');



    const pairedUpvoteButton = event.target.parentNode.parentNode.children[0].children[0]

    pairedUpvoteButton.classList.remove("dark:text-green-500");
    pairedUpvoteButton.classList.remove("fa-solid");
    pairedUpvoteButton.classList.add("fa-regular")
}


// Share button that copies recipe link to the users clipboard
function copyToClipboard(link) {
    const el = document.createElement('textarea');
    el.value = link;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Recipe link copied to clipboard!');
}


// Dark mode
// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");

// const themeSwitch = () => {
//     if (document.documentElement.classList.contains('dark')) {
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem("theme", "light");
//         return;
//     } else {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem("theme", "dark");
//     };
// };

// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });
