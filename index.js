(() => {
  const CHOICES = ["rock", "paper", "scissors"];

  function getComputerSelection() {
    const ranNum = Math.floor(Math.random() * 3);
    return CHOICES[ranNum];
  }

  function getPlayerSelection() {
    let input = null;
    do {
      input = prompt("Pick one").toLowerCase();
    } while (!CHOICES.includes(input));
    return input;
  }

  function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
      case CHOICES[0]:
        switch (computerSelection) {
          case CHOICES[0]:
            return "Tie";
          case CHOICES[1]:
            return "Lose";
          case CHOICES[2]:
            return "Win";
        }
      case CHOICES[1]:
        switch (computerSelection) {
          case CHOICES[0]:
            return "Win";
          case CHOICES[1]:
            return "Tie";
          case CHOICES[2]:
            return "Lose";
        }
      case CHOICES[2]:
        switch (computerSelection) {
          case CHOICES[0]:
            return "Lose";
          case CHOICES[1]:
            return "Win";
          case CHOICES[2]:
            return "Tie";
        }
    }
  }

  function game() {
    let playerScores = 0;
    let computerScores = 0;
    for (let i = 0; i < 5; i++) {
      const playerSelection = getPlayerSelection();
      const computerSelection = getComputerSelection();
      const result = playRound(playerSelection, computerSelection);
      switch (result) {
        case "Win":
          playerScores += 1;
          break;
        case "Lose":
          computerScores += 1;
          break;
      }
    }

    switch (true) {
      case playerScores > computerScores:
        return `${playerScores} : ${computerScores} - You win`;
      case playerScores < computerScores:
        return `${playerScores} : ${computerScores} - You lose`;
      default:
        return `${playerScores} : ${computerScores} - Draw`;
    }
  }

  const result = game();
  console.log(result);
})();
