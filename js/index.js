import { getHeaderFormElements } from './documentRef';
import { utils } from './utilities';

const MAX_SCORE = 100;
const playersClassName = ['player-1', 'player-2'];
const { maxScoreSaveBtnElem, maxScoreInputElem, maxScoreValueElem } = getHeaderFormElements;
const activePlayer = utils.randomNumber(0, 1);
let maxScore = MAX_SCORE;

// Reset all results

// Set active class for current player
utils.setActivePlayer(playersClassName, activePlayer);

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