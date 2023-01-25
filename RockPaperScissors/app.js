const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Error. You are not playing the same game.");
    }
  };
  
  let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
    return randomNum;
  };
  
  
  let determineWinner = (userChoice, computerChoice) => {
     console.log(userChoice, computerChoice)
       if (userChoice === computerChoice) {
      return "The game is a tie!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer has won!";
      } else {
        return "You have won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer has won!";
      } else {
        return "You have won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer has won!";
      } else {
        return "You have won!";
      }
    }
  
  };
  
  console.log(determineWinner("rock", getComputerChoice()));
  