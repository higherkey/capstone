const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

function rollLetter(dieElement) {
  const rollLetterDie = () => {
    const randomIndex = Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(65 + randomIndex);
    dieElement.textContent = randomLetter;
  };

  // Simulate die roll animation
  let rollInterval = setInterval(rollLetterDie, 50); // Flash letters every 50ms

  // Stop animation after 20 iterations and display chosen letter
  setTimeout(() => {
    clearInterval(rollInterval);

    // Generate and display chosen letter after a slight delay
    setTimeout(() => {
      const chosenLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      dieElement.textContent = chosenLetter;
    }, 50); // Delay chosen letter display by 50ms
  }, 1000); // Stop after 1 second (20 * 50ms)
}