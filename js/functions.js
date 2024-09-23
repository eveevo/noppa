'use strict'

const diceDiv = document.getElementById('dice');

diceDiv.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6 ) + 1;

    const diceImg = diceDiv.querySelector('img');

    diceImg.setAttribute('src', './img/' + randomNumber + '.png');
});