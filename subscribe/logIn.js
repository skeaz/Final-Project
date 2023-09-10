const signUpToggle = document.getElementById("signUp");
const signInToggle = document.getElementById("signIn");
const container = document.getElementById("container");

signUpToggle.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInToggle.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
const signInButton = document.getElementById("signInBut");
const signUpButton = document.getElementById("signUpBut");
const emailSignIn = document.getElementById("emailSignIn");
const passwordSignIn = document.getElementById("passwordSignIn");
signInButton.addEventListener("click", () => {
  if (emailSignIn.value === "admin" && passwordSignIn.value === "admin") {
    window.location.href = "../admin/admin.html"; // Replace with your desired URL
  }
});
