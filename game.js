document.addEventListener("DOMContentLoaded", function () {
    const sentences = [
        "שלום לכולם!",
        "משחק תחרות הקלדה",
        "המהירות זה המפתח לניצחון",
        "בהצלחה!",
    ];

    const players = [];
    const maxPlayers = 4;

    const sentenceDisplay = document.getElementById("sentence");
    const inputField = document.getElementById("input-field");
    const playerList = document.getElementById("player-list");

    let currentSentence = "";
    let currentPlayer = 0;

    function getRandomSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        return sentences[randomIndex];
    }

    function updateSentence() {
        currentSentence = getRandomSentence();
        sentenceDisplay.textContent = currentSentence;
    }

    function addPlayer() {
        const playerName = prompt("שם השחקן:");
        if (playerName) {
            players.push({
                name: playerName,
                score: 0,
            });
            updatePlayerList();
        }
    }

    function updatePlayerList() {
        playerList.innerHTML = "";
        players.forEach((player, index) => {
            const playerItem = document.createElement("li");
            playerItem.textContent = `${player.name}: ${player.score} נקודות`;
            if (index === currentPlayer) {
                playerItem.classList.add("current-player");
            }
            playerList.appendChild(playerItem);
        });
    }

    function handleInput(event) {
        if (event.key === "Enter") {
            const typedSentence = inputField.value;
            if (typedSentence === currentSentence) {
                players[currentPlayer].score++;
                updatePlayerList();
                updateSentence();
            }
            inputField.value = "";
            currentPlayer = (currentPlayer + 1) % players.length;
            updatePlayerList();
        }
    }

    document.getElementById("add-player-button").addEventListener("click", addPlayer);
    inputField.addEventListener("keyup", handleInput);

    updateSentence();
});
