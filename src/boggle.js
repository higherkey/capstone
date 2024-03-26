const startGameButton = document.getElementById('start-game');
const timerDisplay = document.getElementById('timer');
const clearBoardButton = document.getElementById('clear-board');
const diceElements = document.querySelectorAll('.dice'); // Selects all elements with class "dice"

let gameStarted = false; // Flag to track game state (started or not)
let intervalId; // Variable to store timer interval

startGameButton.addEventListener('click', function() {
  if (!gameStarted) {
    startGame();
  } else {
    stopGame();
  }

  if (clearBoardButton.style.visibility == "visible") {
    clearBoardButton.style.visibility == "hidden";
  }
  if (clearBoardButton.style.visibility == "hidden") {
    clearBoardButton.style.visibility == "visible";
  }

  // Set focus on word entry textbox after game actions so user can start typing immediately
  if (startGameButton.textContent = 'Start Game') document.getElementById('word-entry-textbox').focus();
});

function startGame() {
  // Populate dice with random letters
  diceElements.forEach(die => {
    rollLetter(die);
  });

  startTimer(); // Call startTimer function

  // Change button text and disable further clicks (optional)
  startGameButton.textContent = 'Stop Game';
  // startGameButton.disabled = true;

  gameStarted = true;

  // // Set focus on word entry textbox only on first game start
  // if (!wordEntryTextbox.hasAttribute('focusedOnce')) {
  //   wordEntryTextbox.focus();
  //   wordEntryTextbox.setAttribute('focusedOnce', 'true'); // Flag to prevent refocusing
  // }
}

function stopGame() {
  stopTimer();

  // Change button text and enable clicks
  startGameButton.textContent = 'Start Game';
  timerDisplay.textContent = "03:00";
  // startGameButton.disabled = false;

  gameStarted = false;
}

// Function to format time remaining as MM:SS
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

clearBoardButton.addEventListener('click', function() {
  diceElements.forEach(dice => {
    dice.textContent = "";
  });
});

// Function to start the timer
function startTimer() {
  let timeLeft = 180; // Set initial time to 180 seconds (3 minutes)

  intervalId = setInterval(() => {
    timeLeft--; // Decrement time every second
    timerDisplay.textContent = formatTime(timeLeft); // Update timer display

    if (timeLeft === 0) {
      stopGame(); // Stop game when time runs out
    }
  }, 1000);
}

// Function to stop the timer (replace with your timer logic)
function stopTimer() {
  // Implement your timer logic here (clear the interval)
  clearInterval(intervalId);
}