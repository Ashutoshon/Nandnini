// Custom
const correctPassword = "N";
const girlName = "Nandini";
const startDate = new Date("2026-03-04");

// Set Name
document.getElementById("herName").innerText = girlName;

// Password
function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
    nextScreen(1);
    startMusic();
  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
}

// Start Background Music
function startMusic() {
  const bg = document.getElementById("bgMusic");
  bg.volume = 1;
  bg.play().catch(()=>{});
}

// Toggle Play / Pause
function toggleMusic() {
  const bg = document.getElementById("bgMusic");
  const btn = document.getElementById("toggleMusic");

  if(bg.paused){
    bg.play();
    btn.innerText = "Pause ⏸️";
  } else {
    bg.pause();
    btn.innerText = "Play ▶️";
  }
}

// Navigation
function nextScreen(n){
  document.querySelectorAll(".screen")
  .forEach(s => s.classList.remove("active"));

  document.getElementById("screen"+n).classList.add("active");
}

// Message
function revealMessage(){
  const msg = `I love you sooo much ${girlName} ❤️`;
  let i = 0;
  let el = document.getElementById("hiddenMsg");
  el.innerHTML = "";

  function type(){
    if(i < msg.length){
      el.innerHTML += msg[i++];
      setTimeout(type,50);
    }
  }
  type();
}

// Story
const storyText = `Our story begins...`;
let index = 0;

function typeStory(){
  if(index < storyText.length){
    document.getElementById("story").innerHTML += storyText[index++];
    setTimeout(typeStory,40);
  }
}

// Chat
const chatMessages = [
 {text:"Hey ❤️", type:"me"},
 {text:"Hi 😊", type:"her"},
 {text:"I miss you 🥺", type:"me"},
 {text:"Aww 😘", type:"her"},
];

function loadChat(){
  const box = document.getElementById("chatBox");
  box.innerHTML = "";
  chatMessages.forEach((m,i)=>{
    setTimeout(()=>{
      const div = document.createElement("div");
      div.className = "msg " + m.type;
      div.innerText = m.text;
      box.appendChild(div);
      box.scrollTop = box.scrollHeight;
    }, i*1000);
  });
}

// Voice but pause music first
function playVoice(){
  const bg = document.getElementById("bgMusic");
  bg.pause();
  document.getElementById("toggleMusic").innerText = "Play ▶️";

  document.getElementById("voice").play();
}

// Counter
setInterval(()=>{
  const now = new Date();
  const days = Math.floor((now-startDate)/(1000*60*60*24));
  document.getElementById("counter").innerText = days+" days together ❤️";
},1000);

// Confetti
function loveResponse(){
  alert("Forever with you ❤️");
  for(let i=0;i<30;i++){
    let c = document.createElement("div");
    c.className="confetti";
    c.style.left = Math.random()*100+"vw";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}
