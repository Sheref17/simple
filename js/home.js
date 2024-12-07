let name = localStorage.getItem("sessionUsername");
let wel = document.querySelector(".heads");
wel.innerHTML = `<h2>Hello ${name}</h2>`;
function logout() {
    localStorage.removeItem("sessionUsername");
    location.replace("./signin.html");
}