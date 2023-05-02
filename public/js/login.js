window.addEventListener("load", () => {
    document.querySelector("#formSubmit").addEventListener("submit", async (event) =>{
        event.preventDefault()

        const userName = document.querySelector("#newName").value;
        const email = document.querySelector("#newEmail").value;
        const password = document.querySelector("#newPassword").value;
        console.log("Button Clicked!", userName, email, password)

        const response = await fetch("./api/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userName: userName,
                email: email,
                password: password
            })
            .then(document.location.replace('/'))
        
            .then(console.log("hello"))
        
        });
        
        
        
    })
    
})