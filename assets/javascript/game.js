    
    // Creates an array that lists out all of the options.
    var computerChoices = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userGuesses = [];
    var userWins = 0;
    var userLoss = 0;
    var guessesLeft = 9;

    function screenDisplayUpdate(w,l,g) {
      	document.getElementById("winsCountDisplay").innerHTML = 
       "<li id='displayWins'>Wins: " + w + "</li>"+
      "<li id='displayLoss'>Loss: " + l + "</li><li id='displayGuessCount'>Guesses Left: " + g + "</li>" +
      "<li id='displayGuess'>Your Guesses so far: " + userGuesses + "</li>";
    }
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    // check if already guessed that letter
    var userGuessDuplicate = 0;

    // check if userGuess valid
    var userGuessValid = 0;

    for ( var i = 0; i < userGuesses.length; i++)
      {
        if ( userGuess === userGuesses[i])
          userGuessDuplicate = 1;
      }

    for ( var i = 0; i < computerChoices.length; i++)
    {
      if ( userGuess === computerChoices[i])
        userGuessValid = 1;
    }

    if ( ( userGuessDuplicate == 0) && ( userGuessValid ) )
      {
      //PUT userGuess into array userGuesses
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
        userGuesses = []; //empty array
        screenDisplayUpdate(userWins,userLoss,guessesLeft);
        console.log("YOU WIN");
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
         userGuesses = []; //empty array
         screenDisplayUpdate(userWins,userLoss,guessesLeft);
      }
      console.log("================")
    } // end userGuessDuplicate
    else
    {

        // not valid or duplicate userGuess
        if ( userGuessValid )
          alert("Try again! You already guessed " + userGuess);
        else
          alert("Try again! Not a letter " + userGuess);
    }
  }
  