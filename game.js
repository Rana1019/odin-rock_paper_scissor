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
     //   console.log("Player won the round");
        return 1;
       


    }
    else if((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissor" && computerSelection == "scissor"))
    {
      //  console.log("draw");
        return 2;
    }
    else if ((playerSelection == 'rock' && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock"))
    {
      //  console.log("player lost the round");
        return 3;
    }
}

function playerInput()
{
    
}

function game()
{
   
    
}


const playerImg = document.querySelector(".playerImage");
const buttons = document.querySelectorAll(".clickable");



let playSco = 0;
let compSco = 0;
let gameCount = 0; //global round count so maxScore wont breach 5

let checktopClick = 0;

buttons.forEach( button => 
   button.addEventListener("click", ev =>
   {
       checktopClick +=1;
       console.log(checktopClick + " top");
 // console.log(ev.target.classList.contains("rock"));
 ev.target.classList.remove("transition");
      ev.target.classList.add("transition");  // adding transition class
    if(ev.target.classList.contains("rock"))
    {
        
      //  console.log(playerImg)
        playerImg.src = "./img/rock.png";
        // computer play here as well and change its image
        let playerIn = "rock";
        let compIn = computerPlay();
        // add func to change comp image 
        compImage(compIn);
        let tempResult = playRound(playerIn, compIn);
        //manage result to change scoreboard
        handleResult(tempResult);

    }
    else if(ev.target.classList.contains("paper"))
    {
        playerImg.src = "./img/paper.png";
      //  console.log(playerImg);
        let playerIn = "paper";
        let compIn = computerPlay();
        // add func to change comp image 
        compImage(compIn);
        let tempResult = playRound(playerIn, compIn);
        //manage result to change scoreboard
        handleResult(tempResult);
    }
    else if(ev.target.classList.contains("scissor"))
    {
        playerImg.src = "./img/scissor.png";
    //    console.log(playerImg);
        let playerIn = "scissor";
        let compIn = computerPlay();
        // add func to change comp image 
        compImage(compIn);
        let tempResult = playRound(playerIn, compIn);
        //manage result to change scoreboard
        handleResult(tempResult);
    }


   }) );
let checkClicks = 0;

buttons.forEach(button =>
    {
        console.log(button);
        button.addEventListener('transitionend', (e)=>
        {
            
            
         //   if(e.propertyName != "transform"){return;}
            if(e.target.classList.contains("transition"))
             {
                 e.target.classList.remove("transition");
                }
            console.log(e.target.classList);
           // e.target.classList.remove("transition");
            checkClicks += 1;
            console.log(checkClicks);
        })
    })



const scoreLocPlayer =  document.querySelector(".playerScore");
const scoreLocComp  = document.querySelector(".compScore");
const heading = document.querySelector(".heading");

function handleResult(number)
{
    document.querySelector(".topHeading").style.boxShadow = "0 0 0";
    if(number == 1)
    {
      playSco +=1;  
      scoreLocPlayer.textContent = playSco;
      scoreLocComp.textContent =  compSco;
    }
    else if(number == 2)
    {
        scoreLocPlayer.textContent = playSco;
      scoreLocComp.textContent =  compSco;
        return;
    }
    else if ( number == 3)
    {
        compSco += 1;
        scoreLocComp.textContent =  compSco;
        scoreLocPlayer.textContent = playSco;
    }
 // make it a func later
    
    let maxScore = Math.max(playSco, compSco);
    if(maxScore == 0)
    {
        heading.textContent = "First to 5 wins";
    }
    else if(maxScore == 5)
    {
        heading.textContent = `${(playSco > compSco)? "Player won the game" : "Computer won the game"}`;
        playSco = 0;
        compSco = 0;
       if(playSco > compSco)
       {
           document.querySelector(".topHeading").style.boxShadow = "0 0 10px green";
           document.querySelector(".topHeading").style.border = "2px green solid";
       }
       else if(compSco > playSco)
       {
        document.querySelector(".topHeading").style.boxShadow = "0 0 10px red";
        document.querySelector(".topHeading").style.border = "2px red solid";
       }
        


    }
    else if(maxScore > 0 && maxScore < 5)
    {
        heading.textContent = "Current Score";
        if(playSco > compSco)
        {
            document.querySelector(".topHeading").style.border = "2px green solid";
        }
        else if(playSco < compSco)
        {
            document.querySelector(".topHeading").style.border = "2px red solid";
        }
        else if(playSco ==  compSco)
        {
            document.querySelector(".topHeading").style.border = "2px yellow solid";
        }
    }

}



const compImg = document.querySelector(".compImage");

function compImage(string)
   {
       if(string == "rock")
       {
          compImg.src = "./img/rock.png"; 
        //  console.log("rockComp");
       }
       else if(string == "paper")
       {
           compImg.src = "./img/paper.png";
        //   console.log("paperComp");
       }
       else if(string == "scissor")
       {
           compImg.src = "./img/scissor.png";
       //    console.log("sciComp");
       }
   }
