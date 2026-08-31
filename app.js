let drawnNumbers = [];
let maxNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function displayTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Female', { rate: 1.0 });
}

function displayInitialMessage() {
    displayTextOnScreen('h1', 'Secret Number Game');
    displayTextOnScreen('p', 'Choose a number between 1 and ' + maxNumber);
}

displayInitialMessage();

function checkGuess() {
    let guess = document.querySelector('input').value;

    if (guess == secretNumber) {
        displayTextOnScreen('h1', 'Congratulations!');
        let attemptWord = attempts > 1 ? 'attempts' : 'attempt';
        let attemptsMessage = `You guessed the secret number in ${attempts} ${attemptWord}!`;
        displayTextOnScreen('p', attemptsMessage);
        document.getElementById('reset').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            displayTextOnScreen('p', 'The secret number is lower than ' + guess);
        } else {
            displayTextOnScreen('p', 'The secret number is higher than ' + guess);
        }
        attempts++;
        clearField();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber) + 1;
    let numbersAlreadyDrawn = drawnNumbers.length;

    if (numbersAlreadyDrawn == maxNumber) {
        drawnNumbers = [];
    }

    if (drawnNumbers.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        drawnNumbers.push(chosenNumber);
        return chosenNumber;
    }
}

function clearField() {
    let guess = document.querySelector('input');
    guess.value = '';
}

function resetGame() {
    secretNumber = generateRandomNumber();
    clearField();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('reset').setAttribute('disabled', true);
}
