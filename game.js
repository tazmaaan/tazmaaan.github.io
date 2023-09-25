document.addEventListener("DOMContentLoaded", function() {
    const socket = io(); // ניצור חיבור WebSocket
    
    const textToType = document.getElementById("text-to-type");
    const userInput = document.getElementById("user-input");
    const startButton = document.getElementById("start-button");
    const resultMessage = document.getElementById("result-message");
    const roomSelect = document.getElementById("room-select");
    const readyButton = document.getElementById("ready-button");
    const roomIdDisplay = document.getElementById("room-id-display");

    let startTime;
    let endTime;
    let currentRoom = null;
    let isReady = false;

    // פונקציה להתחברות לחדר
    function joinRoom(roomId) {
        socket.emit("join-room", roomId);
        currentRoom = roomId;
        roomIdDisplay.textContent = `חדר: ${currentRoom}`;
    }

    // פונקציה להתחלת משחק חדש
    function startGame() {
        socket.emit("start-game", currentRoom);
    }

    // פונקציה לסיום משחק
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
        isReady = false;
        readyButton.disabled = false;
        userInput.disabled = true;
        startButton.disabled = true;
    }

    // הגדרת אירוע לרענון רשימת החדרים
    socket.on("update-rooms", function(rooms) {
        roomSelect.innerHTML = "";
        rooms.forEach(room => {
            const option = document.createElement("option");
            option.value = room;
            option.textContent = room;
            roomSelect.appendChild(option);
        });
    });

    // הגדרת אירוע להתחברות לחדר מסוים
    socket.on("joined-room", function(roomId) {
        currentRoom = roomId;
        roomIdDisplay.textContent = `חדר: ${currentRoom}`;
    });

    // הגדרת אירוע להתחלת המשחק בחדר מסוים
    socket.on("start-game", function() {
        const text = getRandomText();
        textToType.textContent = text;
        userInput.value = "";
        resultMessage.textContent = "";
        userInput.focus();
        startTime = new Date().getTime();
        isReady = false;
        readyButton.disabled = false;
        userInput.disabled = false;
        startButton.disabled = true;
    });

    // הגדרת אירוע לסיום המשחק
    socket.on("end-game", endGame);

    // הגדרת אירוע לשינוי האם השחקן מוכן להתחיל משחק
    socket.on("player-ready", function(ready) {
        isReady = ready;
        if (isReady) {
            readyButton.textContent = "מוכן!";
            readyButton.disabled = true;
        } else {
            readyButton.textContent = "מוכן לשחק";
            readyButton.disabled = false;
        }
    });

    // הגדרת אירוע לשינוי הטקסט במשחק
    socket.on("update-text", function(text) {
        textToType.textContent = text;
    });

    // הגדרת אירוע כאשר השחקן מקליד משהו
    userInput.addEventListener("input", function() {
        if (isReady) {
            const typedText = userInput.value;
            const targetText = textToType.textContent;

            if (typedText === targetText) {
                socket.emit("player-finished", currentRoom);
            }
       
