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