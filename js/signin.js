let alerts = document.getElementById("alerts");

function Signin() {
    let user = {
        Name: userName.value,
        Pass: userPass.value
    };
    
    let found = false;


    if (users && users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            
            if (users[i].Name && users[i].Pass) {
                if (user.Name.toLowerCase() === users[i].Name.toLowerCase() && user.Pass === users[i].Pass) {
                    localStorage.setItem("sessionUsername", users[i].Name);
                    found = true;

                    alerts.classList.add("green");
                    alerts.innerHTML = "<p>Logged in successfully</p>";
                    window.location.href = ".././home.html";
                    break;
                }
            }
        }
    }

    if (!found) {
        alerts.classList.remove("green");
        alerts.classList.add("warning");
        alerts.innerHTML = "<p>Incorrect username or password</p>";
    }
}
