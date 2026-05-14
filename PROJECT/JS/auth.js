// ---------------- SIGNUP ----------------
function signup() {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  const exists = users.some(u => u.email === user.email);

  if (exists) {
    alert("User already exists!");
    return;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  window.location.href = "index.html";
}


// ---------------- LOGIN ----------------
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    u => u.email === email && u.password === password
  );

  if (foundUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}


// ---------------- LOGOUT ----------------
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}