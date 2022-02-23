  function getUserChoice () {
    let userInput = prompt("pick one", "rock").toLowerCase();
    // userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else if (userInput === 'bomb') {
      console.log("Clever Girl.");
      return userInput;
    } else {
      console.log("Pick a real one bro!");
    }
  }

function getComputerChoice () {
   let choice = Math.floor(Math.random() * 3);
   if (choice === 0) {
     return 'rock';
   } else if (choice === 1) {
     return 'scissors';
   } else {
     return 'paper';
   }
}


function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie, binj!");
  } else if (userChoice === 'bomb') {
    alert("EXPLOSION!!!")
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      console.log("You win, binj!")
    } else if (computerChoice === 'paper') {
      console.log("Ur ass got WRAPPED.")
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      console.log("You win, binj!")
    } else if (computerChoice === 'rock') {
      console.log("Ur ass got SMASHED.")
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log("You win, binj!")
    } else if (computerChoice === 'scissors') {
      console.log("Ur ass got CUTTED.")
    }
  }
}

function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);

  console.log(determineWinner(userChoice, computerChoice))


}
