function computerPlay()
{
    let randomNum = Math.floor(Math.random()*3);
  
    if(randomNum == 0)
    {
        return "rock";
    }
    else if (randomNum == 1)
    {
        return "paper";
    }
    else if (randomNum == 2)
    {
        return "scissor";
    }


}


function playRound(playerSelection, computerSelection)
{
    if (( playerSelection == "rock" && computerSelection == "scissor") || ( playerSelection == 'paper' && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper" ))
    {
        console.log("Player won the round");
        return "playerWon";
    }
    else if((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissor" && computerSelection == "scissor"))
    {
        console.log("draw");
        return "draw";
    }
    else if ((playerSelection == 'rock' && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock"))
    {
        console.log("player lost the round");
        return "playerLost";
    }
}

function playerInput()
{
    let playerIn;
    
    while(true)
    {
        playerIn = window.prompt('enter "rock" or "scissor" or "paper"', "rock");
        playerIn = playerIn.toLowerCase();
        if((playerIn == "rock") || (playerIn == "paper") || (playerIn) == "scissor")
        {
            return playerIn;
        }
        else
        {
            
            continue;
        }
    } 
}

function game()
{
    playerScore = 0;
    compScore = 0;
    while(Math.max(playerScore,compScore) < 5)
    {
      let temp =   playRound(playerInput(), computerPlay());
      if(temp == "playerWon")
      {
          playerScore += 1;
      }
      else if( temp == "draw")
      {

      }
      else if(temp == "playerLost")
      {
          compScore += 1;
      }
    }
    if(Math.max(playerScore,compScore) == 5)
    {
        console.log( (playerScore > compScore) ? `Player won ${playerScore} to ${compScore}` : `Computer won ${compScore} to ${playerScore}`  )
        return ;
    }
    
}