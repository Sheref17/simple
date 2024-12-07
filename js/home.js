let name = localStorage.getItem("sessionUsername");
let wel = document.querySelector(".heads");
wel.innerHTML = `<h2>Hello ${name}</h2>`;
function logout() {
    localStorage.removeItem("sessionUsername");
    window.location.href = "/simple/signin.html";
}