'use strict';


let diceRoll;
let currentScore1 = 0;
let currentScore2 = 0;
let finalScore1 = 0;
let finalScore2 = 0;
let isPlayer1 = true;


const dice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const showDice = document.querySelector('.dice');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let diceImg = "";




function makeCurrZero() {

    currentScore1 = 0;
    current1.textContent = currentScore1;

    currentScore2 = 0;
    current2.textContent = currentScore2;
    
}


function makeTransition() {

    if(isPlayer1) {
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
    } else {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    }

}

dice.addEventListener('click', () => {
    diceRoll = Math.trunc(Math.random()*6 + 1);

    switch(diceRoll) {
        case 1 :
            diceImg = "./dice-1.png";
            isPlayer1 = isPlayer1 ? false : true;
            makeCurrZero();
            makeTransition();
            break;
        case 2:
            diceImg = "./dice-2.png";
            break;
        case 3:
            diceImg = "./dice-3.png";
            break;
        case 4:
            diceImg = "./dice-4.png";
            break;
        case 5:
            diceImg = "./dice-5.png";
            break;
        case 6:
            diceImg = "./dice-6.png";
            break;
        default:
            diceImg = "Dice Img";
    }

    if(diceRoll != 1) {
        if(isPlayer1) {
            currentScore1 += diceRoll;
            current1.textContent =currentScore1;
        } else {
            currentScore2 += diceRoll;
            current2.textContent = currentScore2;
        }
    }


    showDice.classList.remove('hidden');
    showDice.setAttribute('src', diceImg);

})

function isWinner(finalScore, player) {

    if(finalScore >= 100) {
        player.classList.add('player--winner');
        showDice.classList.add('hidden');
        dice.classList.add('hidden');
        hold.classList.add('hidden');
    }

}

hold.addEventListener('click', () => {

    if(isPlayer1) {
        finalScore1 += currentScore1;
        score1.textContent = finalScore1;
        isWinner(finalScore1, player1);
        isPlayer1 = false;
        makeTransition();

    } else {
        finalScore2 += currentScore2;
        score2.textContent = finalScore2;
        isWinner(finalScore2, player2);
        isPlayer1 = true;
        makeTransition();
    }

    makeCurrZero();
})


function manageButtons() {
    dice.classList.remove('hidden');
    hold.classList.remove('hidden');
    
}


function removeWinner() {
    if(player1.classList.contains('player--winner')) {
        player1.classList.remove('player--winner');
        manageButtons();
    } else if (player2.classList.contains('player--winner')) {
        player2.classList.remove('player--winner');
        manageButtons();

    }
}

newGame.addEventListener('click', () => {
    showDice.classList.add('hidden');
    makeCurrZero();
    finalScore1 = 0;
    score1.textContent = finalScore1;
    finalScore2 = 0;
    score2.textContent = finalScore2;
    isPlayer1 = true;
    makeTransition();
    removeWinner();

    //remove the winner class from the previous winner
})