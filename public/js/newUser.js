window.addEventListener("load", () => {
    document.querySelector("#createAccount").addEventListener("submit", async (event) =>{
        event.preventDefault()
        const userName = document.querySelector("#newName").value;
        const email = document.querySelector("#newEmail").value;
        const password = document.querySelector("#newPassword").value;        

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
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            // TODO add handling for bad response 
        }       
    })    
})