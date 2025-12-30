const fireworksContainer = document.getElementById("fireworks");
const overlay = document.querySelector(".overlay");
const music = document.getElementById("bg-music");

// Start Experience
function startExperience() {
    music.play();
    overlay.style.display = "none";
}

// Fireworks
function createFirework(x, y) {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "firework";

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150;

        p.style.left = x + "px";
        p.style.top = y + "px";

        p.style.setProperty("--x", Math.cos(angle) * distance + "px");
        p.style.setProperty("--y", Math.sin(angle) * distance + "px");

        p.style.background = `hsl(${Math.random() * 360},100%,60%)`;

        fireworksContainer.appendChild(p);

        setTimeout(() => p.remove(), 1500);
    }
}

setInterval(() => {
    createFirework(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight * 0.6
    );
}, 900);

// Countdown Timer
const newYear = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = newYear - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
}, 1000);
const confettiContainer = document.getElementById("confetti");

// Create Confetti
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

// Confetti Rain Interval
setInterval(createConfetti, 150);
