document.addEventListener("DOMContentLoaded", function() {
    const textToType = document.getElementById("text-to-type");
    const userInput = document.getElementById("user-input");
    const startButton = document.getElementById("start-button");
    const resultMessage = document.getElementById("result-message");
    let startTime;
    let endTime;

    const texts = [
        "טקסט לדוגמה",
        "המשחק הזה כיף!",
        "בוא נראה כמה מילים אתה יכול להקליד בדקה!"
    ];

    function getRandomText() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    function startGame() {
        const text = getRandomText();
        textToType.textContent = text;
        userInput.value = "";
        resultMessage.textContent = "";
        userInput.focus();
        startTime = new Date().getTime();
    }

    function endGame() {
        endTime = new Date().getTime();
        const totalTime = (endTime - startTime) / 1000;
        const typedText = userInput.value;
        const words = typedText.split(" ");
        const wordCount = words.length;
        const correctWords = words.filter(word => textToType.textContent.includes(word)).length;
        const accuracy = (correctWords / wordCount) * 100;
        const wpm = Math.round((wordCount / totalTime) * 60);

        resultMessage.textContent = `סיימת בהצלחה! זמן סיום: ${totalTime.toFixed(2)} שניות | מהירות: ${wpm} מילים לדקה | דיוק: ${accuracy.toFixed(2)}%`;
    }

    startButton.addEventListener("click", startGame);

    userInput.addEventListener("input", function() {
        const typedText = userInput.value;
        const targetText = textToType.textContent;

        if (typedText === targetText) {
            endGame();
        }
    });
});
