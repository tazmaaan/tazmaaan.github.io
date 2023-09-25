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
    let currentPlayer = 1;
    let player1Score = 0;
    let player2Score = 0;

    const player1Input = document.getElementById("player1-input");
    const player2Input = document.getElementById("player2-input");
    const sentenceDisplay = document.getElementById("sentence-display");

    function updateSentence() {
        const sentence = getRandomSentence();
        sentenceDisplay.textContent = sentence;
    }

    function handleInput(event) {
        if (event.key === "Enter") {
            const inputText = event.target.value;
            const displayedSentence = sentenceDisplay.textContent;
            
            if (currentPlayer === 1) {
                if (inputText === displayedSentence) {
                    player1Score++;
                }
                player1Input.value = "";
                currentPlayer = 2;
            } else {
                if (inputText === displayedSentence) {
                    player2Score++;
                }
                player2Input.value = "";
                currentPlayer = 1;
            }
            
            updateSentence();
        }
    }

    player1Input.addEventListener("keyup", handleInput);
    player2Input.addEventListener("keyup", handleInput);

    updateSentence();
}

startGame();
