let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPass = document.getElementById("userPass");
let users = JSON.parse(localStorage.getItem("users")) || [];
let alert = document.getElementById("alert");

function Signup() {
    if (validation()) {
        if (!isexisit()) {
            let user = {
                Name: userName.value,
                Email: userEmail.value,
                Pass: userPass.value
            };

            alert.classList.add("green");
            alert.innerHTML = "<p>Signed up successful</p>";
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
}

function validation() {
    let regex = {
        msgname: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/, 
        msgemail: /^[a-zA-Z][a-zA-Z0-9]+@gmail\.com$/,  
        msgpass: /^[a-zA-Z0-9]{8,}$/  
    };

    if (userName.value === "" || userEmail.value === "" || userPass.value === "") {
        alert.classList.add("warning");
        alert.innerHTML = "<p>Please fill in all the fields.</p>";
        return false;
    }

    if (regex.msgname.test(userName.value) && regex.msgemail.test(userEmail.value) && regex.msgpass.test(userPass.value)) {
        return true;
    } else {
        alert.classList.add("warning");  
        alert.innerHTML = "<p>Please fill the inputs correctly.</p>";
        return false;
    }
}

function isexisit() {
    let user = userEmail.value;
    for (let i = 0; i < users.length; i++) { 
        if (user === users[i].Email) {
            alert.classList.add("warning");  
            alert.innerHTML = "<p>The Email is already Exisited.</p>";
            return true;
        }
    }
    return false;  
}
function Display(){
    let list = document.querySelector(".list")

    list.classList.toggle("display")

}
