// ===== SETTINGS =====
const correctPassword = "N";
const girlName = "Nandini Singh";
const startDate = new Date("2026-03-04");
// ====================

// Set name
document.getElementById("herName").innerText = girlName;

// PASSWORD + FIXED MUSIC AUTOPLAY
function checkPassword() {
  const input = document.getElementById("password").value;
  const bg = document.getElementById("bgMusic");

  if (input === correctPassword) {
    nextScreen(1);

    // FIX: Start muted → then unmute (browser allows this)
    bg.muted = true;
    bg.play().then(() => {
      setTimeout(() => (bg.muted = false), 500);
    });

  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
}

// Navigation
function nextScreen(num) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + num).classList.add("active");
}

// Reveal message
function revealMessage() {
  const msg = `I love you sooo much ${girlName} 
You are so Smart, So polite🥺❤️`;
  let i = 0;
  const el = document.getElementById("hiddenMsg");
  el.innerHTML = "";

  function type() {
    if (i < msg.length) {
      el.innerHTML += msg.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

// Story
const storyText = `
It all started like a normal day... 🌸

But then I met you, ${girlName} 🥺❤️

Your smile 😊, your voice 🎶, your presence 💖
slowly became my favorite part of every day.

I didn’t even realize when you became my world 🌍

And now...
I just know one thing 💍

I never want to lose you ❤️`;

let sIndex = 0;

function typeStory() {
  if (sIndex < storyText.length) {
    document.getElementById("story").innerHTML += storyText.charAt(sIndex);
    sIndex++;
    setTimeout(typeStory, 40);
  }
}

// Chat
const chatMessages = [
  { text: "Hey ❤️", type: "me" },
  { text: "Hi 😊", type: "her" },
  { text: "I miss you 🥺", type: "me" },
  { text: "Aww 😘", type: "her" },
  { text: "I love you ❤️", type: "me" }
];

function loadChat() {
  const box = document.getElementById("chatBox");
  box.innerHTML = "";

  chatMessages.forEach((msg, i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "msg " + msg.type;
      div.innerText = msg.text;
      box.appendChild(div);
    }, i * 1000);
  });
}

// Voice
function playVoice() {
  document.getElementById("voice").play();
}

// Counter
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText = days + " days together ❤️";
}
setInterval(updateCounter, 1000);

// Love confetti
function loveResponse() {
  alert("Forever with you ❤️🥺");

  for (let i = 0; i < 30; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3000);
  }
}

// Stars
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
}
setInterval(drawStars, 50);
