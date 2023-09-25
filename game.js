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

    const player1Input = document.getElementById("player1-input");
    const player2Input = document.getElementById("player2-input");
    const sentenceDisplay = document.getElementById("sentence-display");

    function updateSentence() {
        const sentence = getRandomSentence();
        sentenceDisplay.textContent = sentence;
    }

    function handlePlayer1Input(event) {
        if (event.key === "Enter") {
            const inputText = event.target.value;
            const displayedSentence = sentenceDisplay.textContent;
            if (inputText === displayedSentence) {
                player1Score++;
            }
            event.target.value = "";
            updateSentence();
        }
    }

    function handlePlayer2Input(event) {
        if (event.key === "Enter") {
            const inputText = event.target.value;
            const displayedSentence = sentenceDisplay.textContent;
            if (inputText === displayedSentence) {
                player2Score++;
            }
            event.target.value = "";
            updateSentence();
        }
    }

    player1Input.addEventListener("keydown", handlePlayer1Input);
    player2Input.addEventListener("keydown", handlePlayer2Input);

    updateSentence();
}

startGame();
