const pickLetterButton = document.getElementById('pick-letter');
const chosenLetterDisplay = document.getElementById('chosen-letter');

pickLetterButton.addEventListener('click', function() {
  // Disable button clicks while rolling
  pickLetterButton.disabled = true;

  rollLetter(chosenLetterDisplay);

  // // Simulate die roll animation
  // let rollInterval = setInterval(rollLetterDie, 50); // Flash letters every 50ms

  // // Stop animation after 20 iterations and display chosen letter
  // setTimeout(() => {
  //   clearInterval(rollInterval);

  //   // Generate and display chosen letter after a slight delay
  //   setTimeout(() => {
  //     const chosenLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  //     chosenLetterDisplay.textContent = chosenLetter;
  //   }, 50); // Delay chosen letter display by 50ms
  // }, 1000); // Stop after 1 second (20 * 50ms)

  pickLetterButton.disabled = false; // Re-enable button clicks
});

