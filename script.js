let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        comScorePara.innerText=comScore;
        msg.innerText=`You lose! ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    console.log("user-choice = ", userChoice);
    //Generate computer choice
    const comChoice = genCompChoice();
    
    if(userChoice === comChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice === "rock")
        {
          //paper,scissors.
          userWin = comChoice==="paper" ? false :true;
        }
        else if(userChoice === "paper")
        {
            //scissors,rock
            userWin=comChoice==="scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin=comChoice==="rock" ? false :true;
        }
       showWinner(userWin,userChoice,comChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});