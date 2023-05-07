window.addEventListener("load", () => {
    const btnLogout = document.querySelector("#logout");

    if(btnLogout)
    {
        btnLogout.addEventListener("click", async () =>{
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
    }
})


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
