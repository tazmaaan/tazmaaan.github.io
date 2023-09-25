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
        console.log(`שחקן ${playerName} התחיל את המשחק`);
        welcomeScreen.style.display = "none";
    }
});
