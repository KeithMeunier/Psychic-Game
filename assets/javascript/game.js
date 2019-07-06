var browserSelection = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];



window.onload = function() {
var compGuess = browserSelection[Math.floor(Math.random() * browserSelection.length)];
computerGuess.push(compGuess);
console.log(computerGuess[0]);
}

//Actual game
document.onkeyup = function(event) {
var playerGuess = event.key;
lettersGuessed.push(playerGuess);
console.log(computerGuess[0]);

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
wins++;
guessesLeft = 9;
lettersGuessed.length = 0;
computerGuess.length = 0;
var compGuess = browserSelection[Math.floor(Math.random() * browserSelection.length)];
computerGuess.push(compGuess);
console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
guessesLeft = guessesLeft-1;
}

else {
losses++;
guessesLeft = 9;
lettersGuessed.length = 0;
computerGuess.length = 0;
var compGuess = browserSelection[Math.floor(Math.random() * browserSelection.length)];
computerGuess.push(compGuess);
console.log(computerGuess[0]);
}

var html = "<h3>PSYCHIC GAME</h3>" +
"<p>Bet you can't guess the letter I'm thinking!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses left: " + guessesLeft + "</p>" +
"<p>Guesses so far: " + lettersGuessed + "</p>";

document.querySelector("#game").innerHTML = html;
}
