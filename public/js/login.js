window.addEventListener("load", () => {
    document.querySelector("#signIn").addEventListener("submit", async (event) => {
        event.preventDefault()
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value

        const response = await fetch('/api/users/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("Error Loggin In");
        }
    })
})