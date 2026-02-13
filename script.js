// smooth scroll
document.getElementById("enterBtn").addEventListener("click", () => {
    document.getElementById("memory").scrollIntoView({
        behavior: "smooth"
    });
});

// floating hearts generator

const heartContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const hearts = ["💗","💖","💕","💞","💓"];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";

    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    const duration = 6 + Math.random() * 6;
    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}

// spawn hearts continuously
setInterval(createHeart, 400);

const quotes = [
"You don't try to be special — still you're my favourite part of the day.",
"Your smile fixes moods you never broke.",
"Being with you never feels like effort.",
"Some people give attention. You give peace.",
"You didn't become important suddenly — it just happened.",
"Even silence feels complete with you.",
"I don't wait for plans… I wait for you.",
"You stay real, even on bad days."
];

const quoteText = document.getElementById("quoteText");

let quoteIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentQuote = quotes[quoteIndex];

    if (!isDeleting) {
        quoteText.textContent = currentQuote.slice(0, charIndex++);
    } else {
        quoteText.textContent = currentQuote.slice(0, charIndex--);
    }

    let speed = isDeleting ? 40 : 70;

    if (!isDeleting && charIndex === currentQuote.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        quoteIndex = (quoteIndex + 1) % quotes.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

setInterval(changeQuote, 4000);

document.querySelectorAll(".window").forEach(window => {

    window.addEventListener("click", () => {
        window.classList.toggle("open");
    });

});
