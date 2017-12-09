    
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userGuesses = [];
    var userWins = 0;
    var userLoss = 0;
    var guessesLeft = 9;

    function screenDisplayUpdate(w,l,g) {
      	document.getElementById("winsCountDisplay").innerHTML = "Wins: " + w +
      	"<br/><br/>Loss: " + l + "<br/><br/>Guesses Left: " + g + "<br/><br/>Your Guesses so far: " + userGuesses;
    }
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      userGuesses.push(userGuess);

      console.log("you guessed "+ userGuess + " " + userGuesses);
      console.log("computer "+ computerGuess);
      if (userGuess === computerGuess)
      {
      	// USER WINS
      	// increment userWins count
      	// reset guessesLeft count to 9
      	// refresh user screen counts
        guessesLeft = 9;
        userWins++;
        screenDisplayUpdate(userWins,userLoss,guessesLeft);
      }
      else{
      	guessesLeft--;
      	screenDisplayUpdate(userWins,userLoss,guessesLeft);
      }

      // USER LOSS - NO MORE GUESSES
      // increment userLoss count
      // reset guessesLeft count to 9
      if ( guessesLeft == 0 )
      {
      	 userLoss++;
         guessesLeft = 9;
         userGuesses = [];
         screenDisplayUpdate(userWins,userLoss,guessesLeft);
      }
      console.log("================")
  }
  