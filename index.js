let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
let options =["rock","paper","scissore"];
let randomIdx = Math.floor(Math.random()*3);
return options[randomIdx];
};

const drawGame = ()=>{
    console.log("draw game!");
    msg.innerText = "Draw Game..! Try Again ..!";
    msg.style.backgroundColor = "rgb(18, 18, 42)";
};

const showWinner =(userWin,userchoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore; 
        msg.innerText = `You Win ..! your ${userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ..! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

let playGame = (userchoice)=>{
    console.log("user choice =",userchoice);
    // generate computer choice --> modular way to programing create new function each work
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

    if(userchoice === compChoice)
    {
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissore ,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            //rock ,scissore
            userWin = compChoice === "scissore" ? false : true;
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userchoice = choice.getAttribute("id");
    playGame(userchoice);
    });
}); 

let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let mode ="dark";
btn.addEventListener("click",()=>{
    if(mode==="dark")
    {
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    else{
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
});

