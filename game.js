document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcome");

    function startGame(playerName) {
        console.log(`שחקן ${playerName} התחיל את המשחק`);
        welcomeScreen.style.display = "none";
    }

    startGame("שחקן חדש"); // השורה הזו תציג את הטקסט מיד בטעינת העמוד
});
