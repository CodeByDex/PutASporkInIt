window.addEventListener("load", () => {
    document.querySelector("#logout").addEventListener("click", async () =>{
        document.location.replace('/login');
        
        // const response = await fetch('/api/users/logout', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //   });
        
        //   if (response.ok) {
        //     // If successfully logged out, redirect to the login page
            
            
        //   } else {
        //     alert(response.statusText);
        //   }
        // })
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


// Favorite button
const favoriteButton = document.querySelector(".favorite-button");
favoriteButton.addEventListener("click", () => {
    favoriteButton.querySelector('i').classList.toggle('fa-solid');
    favoriteButton.querySelector('i').classList.toggle('fa-regular');
    favoriteButton.querySelector('i').classList.toggle('dark:text-green-500');
})



