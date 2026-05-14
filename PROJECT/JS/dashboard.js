// ---------------- AUTH CHECK ----------------
const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
  window.location.href = "index.html";
}

const role = user.role;


// ---------------- DEFAULT EVENTS ----------------
const defaultEvents = [
  { title: "Tech Fest", date: "10 May", desc: "Coding competition" },
  { title: "AI Workshop", date: "15 May", desc: "AI learning session" },
  { title: "Hackathon", date: "20 May", desc: "24-hour coding event" }
];


// ---------------- LOAD STORED EVENTS ----------------
let storedEvents = JSON.parse(localStorage.getItem("events")) || [];


// ---------------- RENDER EVENTS ----------------
const container = document.getElementById("events");

if (container) {
  const allEvents = [...defaultEvents, ...storedEvents];

  allEvents.forEach(event => {
    container.innerHTML += `
      <div class="card-event">
        <h3>${event.title}</h3>
        <p>📅 ${event.date}</p>
        <p>${event.desc}</p>
        <button>Bookmark</button>
      </div>
    `;
  });
}


// ---------------- ROLE BASED UI ----------------
if (role === "student") {
  const createLink = document.getElementById("create-link");
  if (createLink) createLink.style.display = "none";
}

if (role === "college") {
  const registerLink = document.getElementById("register-link");
  if (registerLink) registerLink.style.display = "none";
}


// ---------------- SECTION SWITCHING ----------------
function showSection(section) {
  const sections = ["home", "about", "register", "create"];

  sections.forEach(sec => {
    const el = document.getElementById(`${sec}-section`);
    if (el) el.style.display = "none";
  });

  const active = document.getElementById(`${section}-section`);
  if (active) active.style.display = "block";
}


// ---------------- REGISTER EVENT ----------------
function registerEvent() {
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const event = document.getElementById("reg-event").value;

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  alert(`Registered for ${event} 🎉`);
}


// ---------------- CREATE EVENT ----------------
function createEvent() {
  const title = document.getElementById("event-title").value;
  const date = document.getElementById("event-date").value;
  const desc = document.getElementById("event-desc").value;

  if (!title || !date || !desc) {
    alert("Fill all fields");
    return;
  }

  let events = JSON.parse(localStorage.getItem("events")) || [];

  events.push({ title, date, desc });

  localStorage.setItem("events", JSON.stringify(events));

  alert("Event Created 🎉");
}