const timeEl = document.getElementById("time");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const greetingEl = document.getElementById("greeting");
const refreshBtn = document.getElementById("refresh");

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  timeEl.textContent = timeString;

  if (hours < 12) greetingEl.textContent = "Good Morning 🌞";
  else if (hours < 18) greetingEl.textContent = "Good Afternoon 🌤️";
  else greetingEl.textContent = "Good Evening 🌙";
}

async function getQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quoteEl.textContent = `"${data.content}"`;
  authorEl.textContent = `– ${data.author}`;
}

function changeBackground() {
  document.body.style.backgroundImage =
    `url('https://source.unsplash.com/1920x1080/?nature,landscape,peace')`;
}

refreshBtn.addEventListener("click", () => {
  getQuote();
  changeBackground();
});

setInterval(updateTime, 1000);
updateTime();
getQuote();
changeBackground();
