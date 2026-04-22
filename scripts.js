
const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const compScore = document.querySelector('#comp-score');
const humanChoiceDisplay = document.querySelector('#human-choice');
const machineChoiceDisplay = document.querySelector('#comp-choice');
const endGame= document.querySelector('.game-result');
const btns = document.querySelectorAll('button');

let humanScoreNumber = 0;
let compScoreNumber = 0;

const playHuman = (humanChoice)=>{
    playTheGame(humanChoice, playMachine());

}

const playMachine = ()=>{
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log(`Human: ${human} - Machine: ${machine}`);
    if(human === machine){
        result.innerHTML = "It's a tie!";
        humanChoiceDisplay.innerHTML = human;
        machineChoiceDisplay.innerHTML = machine;
    } else if ((human === 'rock' && machine === 'scissors') ||
               (human === 'paper' && machine === 'rock') ||
               (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "You win!";
        
        humanChoiceDisplay.innerHTML = human;
        machineChoiceDisplay.innerHTML = machine;
    } else {
        compScoreNumber++;
        compScore.innerHTML = compScoreNumber;
        result.innerHTML = "Computer wins!";
        
        humanChoiceDisplay.innerHTML = human;
        machineChoiceDisplay.innerHTML = machine;
    }

    endingGame();

}

const endingGame = () => {
    console.log("Chamando endingGame");
    if(humanScoreNumber === 5){
        endGame.innerHTML = "Congratulations! You won the game!";
       
     btns.forEach(btn => btn.disabled = true);
    setTimeout(() => {
        location.reload();
    }, 5000);
        
    } else if (compScoreNumber === 5){
        endGame.innerHTML = "Computer won the game!";
        
     btns.forEach(btn => btn.disabled = true);
        setTimeout(() => {
            location.reload();
        }, 5000);
    
    }
}

