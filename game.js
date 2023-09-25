document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcome");
    const playerNameInput = document.getElementById("player-name-input");
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function () {
        const playerName = playerNameInput.value.trim();
        if (playerName !== "") {
            startGame(playerName);
        } else {
            alert("אנא הזן שם באנגלית לפני שתתחיל");
        }
    });

    function startGame(playerName) {
        // כאן תוכל להוסיף את הלוגיקה הראשונית של המשחק
        // כמו יצירת המשפטים והמשך המשחק
        console.log(`שחקן ${playerName} התחיל את המשחק`);
        welcomeScreen.style.display = "none"; // הסתרת מסך הברוכים הבאים
    }
});
