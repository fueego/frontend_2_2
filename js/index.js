import { getHeaderFormElements } from './documentRef';
import { utils } from './utilities';

const MAX_SCORE = 100;

const { maxScoreSaveBtn, maxScoreInput, maxScoreValue } = getHeaderFormElements;
const currentPlayer = utils.randomNumber(1, 2);
let maxScore = MAX_SCORE;

console.log(currentPlayer);

maxScoreSaveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    maxScore = isNaN(maxScoreInput.value) ? MAX_SCORE : parseInt(maxScoreInput.value);

    // update visible part for max-score
    utils.updateElementContent(maxScoreValue, maxScore);

    // clear input
    maxScoreInput.value = '';
});

