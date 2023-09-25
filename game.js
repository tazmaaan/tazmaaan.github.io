// game.js

// רשימת המשפטים
const sentences = [
    "שלום, איך אתה היום?",
    "זה הזמן לשחק משחק!",
    "אני אוהב לתכנת בג'אווהסקריפט.",
    "למה הכוס ריקה? היית צריך להכניס קפה!",
    "תודה רבה על העזרה שלך."
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function startGame() {
    let player1Score = 0;
    let player2Score = 0;
    let currentPlayer = 1;
    let currentSentence = getRandomSentence();

    const player1Input = document.getElementById("player1-input");
    const player2Input = document.getElementById("player2-input");
    const sentenceDisplay = document.getElementById("sentence-display");

    function updateSentence() {
        currentSentence = getRandomSentence();
        sentenceDisplay.textContent = currentSentence;
    }

    function handleInput(event) {
        if (event.key === "Enter") {
            const inputText = event.target.value;
            
            if (inputText === currentSentence) {
                if (currentPlayer === 1) {
                    player1Score++;
                } else {
                    player2Score++;
                }
            }
            
            event.target.value = "";
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateSentence();
        }
    }

    player1Input.addEventListener("keydown", handleInput);
    player2Input.addEventListener("keydown", handleInput);

    updateSentence();
}

startGame();
