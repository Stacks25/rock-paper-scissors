

// function to write the start sentence at the start page

let text = "Welcome! Press The Button below to defeat the master khan";
let i = 0;
let speed = 50;
const frontText = document.getElementById("frontText");

function typeText(){
    if (i<text.length){
     frontText.innerHTML += text.charAt(i);
     i++;
     setTimeout(typeText, speed);
    }
}



// For the user selection div

const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const pickElement = document.getElementById("pickElement");
const selectBtn = document.querySelectorAll(".selectDiv");
let userChoiceDisplay;
let computerChoiceDisplay;
let result;

selectBtn.forEach(selectsBtn => selectsBtn.addEventListener("click", (e)=>{
userChoiceDisplay = e.target.id;
userChoice.innerHTML = userChoiceDisplay;
generateComputerChoice();
gameResults();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * selectBtn.length)+1;
    if(randomNumber === 1){
        computerChoiceDisplay = "rock";
    }
    if(randomNumber === 2){
        computerChoiceDisplay = "scissors";
    }
    if(randomNumber === 3){
        computerChoiceDisplay = "paper";
    }
    computerChoice.innerHTML = computerChoiceDisplay;
}

function gameResults(){
    if (computerChoiceDisplay === userChoiceDisplay){
        result = "its a draw";
    }
      if (computerChoiceDisplay === "rock" && userChoiceDisplay === "paper"){
        result = "Hooray You beat Khan";
    }
    if(computerChoiceDisplay === "rock" && userChoiceDisplay === "scissors"){
        result = "You beat Khan";
    }
    if(computerChoiceDisplay === "paper" && userChoiceDisplay === "scissors"){
        result = "Khan win";
    }
    if(computerChoiceDisplay === "paper" && userChoiceDisplay === "rock"){
        result = "Khan win";
    }
    if(computerChoiceDisplay === "scissors" && userChoiceDisplay === "rock"){
        result = "Khan lose";
    }
    if(computerChoiceDisplay === "scissors" && userChoiceDisplay === "paper"){
        result = "Khan win";
    }
    resultDisplay.innerHTML = result;
}
typeText();
