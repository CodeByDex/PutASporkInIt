window.addEventListener("load", () => {
    document.querySelector("#Create-Account").addEventListener("click", async () =>{
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
        });
        
        console.log(response);
    })
})