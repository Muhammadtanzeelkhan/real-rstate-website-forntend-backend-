const form = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Dummy login validation
  if (email === "user@example.com" && password === "password123") {
    loginMessage.textContent = "Login successful! Redirecting...";
    loginMessage.style.color = "green";
    loginMessage.classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "./index.html"; // Redirect to home
    }, 1500);
  } else {
    loginMessage.textContent = "Invalid email or password.";
    loginMessage.style.color = "red";
    loginMessage.classList.remove("hidden");
  }
});
