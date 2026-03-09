// Constants for Loading Messages
const LOADING_MESSAGES = [
    "Initializing future prediction engine...",
    "Connecting to NASA servers...",
    "Bypassing security firewall...",
    "Decrypting tomorrow's timeline...",
    "Accessing Area 51 database...",
    "Reading user's destiny...",
    "Analyzing procrastination probability...",
    "Downloading tomorrow's events...",
    "Contacting time travelers...",
    "Scanning brainwaves...",
    "Calculating laziness level...",
    "ERROR: Too much laziness detected",
    "Retrying calculation...",
    "WARNING: Future not found",
    "Rebuilding timeline...",
    "Prediction successfully extracted."
];

const EXCUSES = [
    "My laptop needed emotional support.",
    "The WiFi stopped believing in me.",
    "My alarm clock joined the enemy team.",
    "My dog deleted my assignment.",
    "I accidentally stepped into a parallel dimension.",
    "My brain is currently in low-power mode.",
    "I was busy teaching my cat how to code.",
    "The sun was too loud today.",
    "I got stuck in a recursive loop of self-doubt.",
    "A pigeon gave me a side-eye and I lost my focus."
];

// Helper: Typing Animation
async function typeWriter(element, text, speed = 30) {
    element.innerHTML += '<span class="terminal-line"></span>';
    const lastLine = element.lastElementChild;

    if (text.startsWith("ERROR")) lastLine.classList.add("error");
    if (text.startsWith("WARNING")) lastLine.classList.add("warning");

    for (let i = 0; i < text.length; i++) {
        lastLine.innerHTML += text.charAt(i);
        await new Promise(r => setTimeout(r, speed));
    }
    element.scrollTop = element.scrollHeight;
}

// Logic: Hacking Sequence
async function startHackingSequence(resultCallback) {
    const overlay = document.getElementById('hackingOverlay');
    const logs = document.getElementById('terminalLogs');
    const progressBar = document.getElementById('hackingProgressBar');
    const progressText = document.getElementById('progressText');

    overlay.classList.remove('hidden');
    logs.innerHTML = '';
    progressBar.style.width = '0%';

    const duration = 15000 + Math.random() * 5000; // 15-20 seconds
    const steps = LOADING_MESSAGES.length;
    const interval = duration / steps;

    for (let i = 0; i < steps; i++) {
        await typeWriter(logs, LOADING_MESSAGES[i]);
        const progress = Math.round(((i + 1) / steps) * 100);
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress}%`;
        await new Promise(r => setTimeout(r, interval * 0.5));
    }

    setTimeout(() => {
        overlay.classList.add('hidden');
        resultCallback();
    }, 1000);
}

// Tools Logic
function predictNextDay() {
    const status = document.getElementById('dayStatus').value;
    const outcomes = {
        amazing: ["Tomorrow you will become productive for exactly 14 minutes.", "Tomorrow you will find 10 rupees in an old pair of jeans."],
        normal: ["Tomorrow someone will send you a meme at 3AM.", "Tomorrow you will promise to study but open YouTube."],
        lazy: ["Tomorrow you will reach Legendary Lazy status by noon.", "Tomorrow your bed will refuse to let you go."],
        studied: ["Tomorrow you will forget 80% of what you read today.", "Tomorrow you will start a project and abandon it."],
        procrastinated: ["Tomorrow you will do exactly what you did today, but with more guilt.", "Tomorrow you will find a new way to avoid work."],
        survived: ["Tomorrow you will survive again, barely.", "Tomorrow the WiFi will test your patience."]
    };

    const result = outcomes[status][Math.floor(Math.random() * outcomes[status].length)];
    startHackingSequence(() => showResult(result));
}

function predictExam() {
    const hours = document.getElementById('studyHours').value || 0;
    const coffee = document.getElementById('coffeeCups').value || 0;
    const results = [
        "You will pass but even the professor doesn't know how.",
        "Borderline survival. Don't look at the grades directly.",
        "Prepare for motivational quotes in your inbox.",
        "The universe says: 'Better luck next semester'.",
        "Your rank will be in the top 100... from the bottom."
    ];
    const result = results[Math.floor(Math.random() * results.length)];
    startHackingSequence(() => showResult(result));
}

function generateExcuse() {
    const excuse = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
    document.getElementById('excuseDisplay').innerText = excuse;
}

function copyExcuse() {
    const text = document.getElementById('excuseDisplay').innerText;
    if (text === "Click to generate...") return;
    navigator.clipboard.writeText(text);
    alert("Excuse copied to clipboard!");
}

function detectLaziness() {
    const sleep = parseInt(document.getElementById('sleepHours').value);
    const work = parseInt(document.getElementById('workHours').value);
    const netflix = parseInt(document.getElementById('netflixHours').value);

    let level = "Beginner Lazy";
    if (netflix > 5 || sleep > 10) level = "Professional Lazy";
    if (work < 1 && netflix > 8) level = "Legendary Lazy";
    if (sleep + netflix > 18) level = "Ultimate Couch Master";

    startHackingSequence(() => showResult(`Your laziness level is: ${level.toUpperCase()}.`));
}

function scanPersonality() {
    const results = [
        "You start projects and forget them.",
        "You open GitHub to feel productive.",
        "You are powered by caffeine and poor life choices.",
        "You have 47 open tabs and none of them are useful.",
        "Your digital footprint is mostly procrastination."
    ];
    const result = results[Math.floor(Math.random() * results.length)];
    startHackingSequence(() => showResult(result));
}

// UI Helpers
function showResult(text) {
    document.getElementById('tools').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('resultOutput').innerText = text;
}

function resetUI() {
    document.getElementById('results').classList.add('hidden');
    document.getElementById('tools').classList.remove('hidden');
}

function togglePrivacyModal(show) {
    const modal = document.getElementById('privacyModal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

function shareResult(platform) {
    const text = `My future prediction: ${document.getElementById('resultOutput').innerText} \nCheck yours at: https://vishnucax.github.io/future-predictor/`;
    const url = encodeURIComponent(window.location.href);

    if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
    }
}

// Matrix Background Animation
function initMatrix() {
    const canvas = document.createElement('canvas');
    document.getElementById('matrixBg').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f0";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 33);
}

// Random Popups
function spawnPopup() {
    const messages = [
        "SYSTEM MESSAGE: Future may contain unexpected naps.",
        "ALERT: User detected with high procrastination levels.",
        "WARNING: Reality is loading slowly today.",
        "CRITICAL: Motivation files not found.",
        "NOTIFY: You have been scrolled for over 5 minutes."
    ];

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = messages[Math.floor(Math.random() * messages.length)];

    popup.style.top = Math.random() * 80 + '%';
    popup.style.left = Math.random() * 80 + '%';

    document.getElementById('popups').appendChild(popup);
    setTimeout(() => popup.remove(), 5000);
}

// Initialize
window.onload = () => {
    initMatrix();
    setInterval(spawnPopup, 10000);

    // Panic Level Slider Link
    const panicSlider = document.getElementById('panicLevel');
    const panicValue = document.getElementById('panicValue');
    if (panicSlider) {
        panicSlider.oninput = function () {
            panicValue.innerText = this.value + "%";
        };
    }
};
