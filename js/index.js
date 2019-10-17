import { getHeaderFormElements } from './documentRef';
import { utils } from './utilities';

const MAX_SCORE = 40;
const playersClassName = ['player-1', 'player-2'];
const { maxScoreSaveBtnElem, maxScoreInputElem, maxScoreValueElem } = getHeaderFormElements;
let finalScore = [0, 0];
let currentScore = [0, 0];
let activePlayer = utils.randomNumber(1, 2);
let maxScore = MAX_SCORE;

// Reset all results
utils.resetView();

// Setup addEventListeners before one of them dissapear
document.querySelector('#action-1 .btn--primary').addEventListener('click', playBtnLogic);
document.querySelector('#action-2 .btn--primary').addEventListener('click', playBtnLogic);
document.querySelector('#action-1 .btn--default').addEventListener('click', takeBtnLogic);
document.querySelector('#action-2 .btn--default').addEventListener('click', takeBtnLogic);

// Take care at max score update form
maxScoreSaveBtnElem.addEventListener('click', (e) => {
    e.preventDefault();

    if ( maxScoreInputElem.value ) {
        maxScore = isNaN(maxScoreInputElem.value) ? MAX_SCORE : parseInt(maxScoreInputElem.value);
        
        // update visible part for max-score
        utils.updateElementContent(maxScoreValueElem, maxScore);

    // clear input
    maxScoreInputElem.value = '';
    }
});

// Handle reset btn clikc
document.querySelector('.footer > .btn').addEventListener('click', () => {
    utils.resetView();
    finalScore = [0, 0];
    currentScore = [0, 0];
});

// Set active class for current player
utils.setActivePlayer(playersClassName, activePlayer);

function takeBtnLogic() {
    const currentElem = document.getElementById(`current-${activePlayer}`);
    const scoreElem = document.getElementById(`score-${activePlayer}`);

    finalScore[activePlayer-1] += parseInt(currentElem.innerHTML);
    scoreElem.innerHTML = finalScore[activePlayer-1];
    currentScore[activePlayer-1] = 0;

    currentElem.innerHTML = 0;

    if ( finalScore[activePlayer-1] >= maxScore ) {
        console.log('Winner!');
    } else {
        switchAndActivatePlayer();
    }
}

// Play btn logic
function playBtnLogic() {
    // get random number from 1 to 6
    const randomDice = utils.randomNumber(1, 6);
    
    // update dice image
    document.querySelector(`.player-${activePlayer} > .player__dice img`).src = `../images/dice-${randomDice}.png`;
    
    // update current score ( 1 reset to 0 and switch player, all rest add current score )
    if ( randomDice != 1 ) {
        currentScore[activePlayer-1] += randomDice;
        document.querySelector(`#current-${activePlayer}`).innerHTML = currentScore[activePlayer-1];
    } else {
        currentScore[activePlayer-1] = 0;
        document.querySelector(`#current-${activePlayer}`).innerHTML = currentScore[activePlayer-1];
        switchAndActivatePlayer();
    }
}

function switchAndActivatePlayer() {
    activePlayer = utils.getNextPlayer(activePlayer);
    utils.setActivePlayer(
        playersClassName,
        activePlayer
    );
}