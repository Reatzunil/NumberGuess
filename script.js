const NumberisSecret = Math.floor(Math.random() * 10) + 1;
let chances = 3;

function checkguess() {

	const userGuessInput = document.getElementById('userGuess');
	const userGuess = parseInt (userGuessInput.value);

	if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
		alert ('Please enter  valid number between 1 - 10.');
		return;
	}

	const feedbackElement = document.getElementById('feedback');
	const chancesElement = document.getElementById('chances');
	const retryButton = document.getElementById('retryButton');

	chances--;

	if (userGuess === NumberisSecret) {
		feedbackElement.textContent = 'Congrats! The number you guessed is Correct.';
		chancesElement.textContent = '';
		retryButton.disabled = false;

	} else {
		feedbackElement.textContent = 'Incorrect! The correct number is ${userGuess < NumberisSecret ? 'higher' : 'lower'}.';
	}

	if (chances === 0) {
		feedbackElement.textContent = 'Sorry, youre out of chances . The Correct number was ${NumberisSecret}.';
		retryButton.disabled = false;
	} else {
		chancesElement.textContent = 'Chances left : ${chances}';

	}
}

function resetGame() {
	chances = 3;
	document.getElementById('feedback').textContent='';
	document.getElementById('chances').textContent='Chances left : 3';
	document.getElementById('userGuess').value='';
	document.getElementById('retrybutton').disabled=true;
	NumberisSecret = Math.floor(Math.random() * 10) + 1;
}