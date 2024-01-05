document.addEventListener("DOMContentLoaded", function() {
    const loginSlide = document.querySelector(".login");
    const signupSlide = document.querySelector(".signup");
    const loginToggle = document.querySelector("#loginToggle");
    const signupToggle = document.querySelector("#signupToggle");

    loginToggle.addEventListener("click", function() {
        loginSlide.classList.add("active");
        signupSlide.classList.remove("active");
    });

    signupToggle.addEventListener("click", function() {
        loginSlide.classList.remove("active");
        signupSlide.classList.add("active");
    });

    const loginForm = document.querySelector("#loginForm");
    const signupForm = document.querySelector("#signupForm");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Handle login logic here
        alert("Login clicked!");
    });

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Handle signup logic here
        alert("Sign Up clicked!");
    });
});