const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");


const messages = [
    "Cigurno? 🤨",
    "Ctvarno necec?? 😳",
    "Probaj joc jednom 😌",
    "Joc jednom 🙄"
];
let msgIndex = 0;


function createHearts(x, y) {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";

        const offsetX = (Math.random() - 0.5) * 200;
        heart.style.setProperty("--x", offsetX + "px");

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}


noBtn.addEventListener("click", () => {
    noBtn.innerText = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;
});


yesBtn.addEventListener("click", () => {
    const rect = yesBtn.getBoundingClientRect();
    createHearts(rect.left + rect.width / 2, rect.top + rect.height / 2);

    question.innerText = "YAAAY! 💕 Znala cam!";


    setTimeout(() => {
        window.close();
    }, 5000);
});
