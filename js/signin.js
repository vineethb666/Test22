const signupBtn = document.querySelector("#signup")
const loginBtn = document.querySelector("#login")

const signupSection = document.querySelector("#signup-section");
const loginSection = document.querySelector("#login-section");


signupBtn.addEventListener("click", () => {

    loginSection.classList.add("hide");
    signupSection.classList.remove("hide");
    loginBtn.classList.remove("btn-active");
    signupBtn.classList.add("btn-active");
})

loginBtn.addEventListener("click", () => {

    signupSection.classList.add("hide");
    loginSection.classList.remove("hide");
    loginBtn.classList.add("btn-active");
    signupBtn.classList.remove("btn-active");
})