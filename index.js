(() => {
  const CHOICES = ["rock", "paper", "scissors"];

  function getComputerSelection() {
    const ranNum = Math.floor(Math.random() * 3);
    return CHOICES[ranNum];
  }

  function getPlayerSelection(e) {
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
  const playerSelectionEl = document.querySelector(".player__selection");
  const computerSelectionEl = document.querySelector(".computer__selection");
  const playerScoreEl = document.querySelector(".player__score");
  const computerScoreEl = document.querySelector(".computer__score");
  const announcementTextEl = document.querySelector(".announcement__text");
  const buttons = document.querySelectorAll(".button");
  let playerScores = 0;
  let computerScores = 0;

  function game(playerSelection, computerSelection) {
    const result = playRound(playerSelection, computerSelection);
    switch (result) {
      case "Win":
        playerScores += 1;
        playerScoreEl.textContent = playerScores;
        break;
      case "Lose":
        computerScores += 1;
        computerScoreEl.textContent = computerScores;
        break;
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

  function handleClick(event) {
    const textContent = event.target.textContent;
    playerSelectionEl.textContent = textContent;
    const computerSelection = getComputerSelection();
    computerSelectionEl.textContent =
      computerSelection[0].toUpperCase() + computerSelection.slice(1);
    game(textContent.toLowerCase(), computerSelection);
    if (playerScores == 5) {
      announcementTextEl.textContent = "You win.";
    } else if (computerScores == 5) {
      announcementTextEl.textContent = "You lose.";
    }
    if (playerScores == 5 || computerScores == 5) {
      buttons.forEach((button) =>
        button.removeEventListener("click", handleClick)
      );
    }
  }
  buttons.forEach((button) => button.addEventListener("click", handleClick));
})();
