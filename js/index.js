import { gameElements } from './documentRef';

const { maxScoreSaveBtn } = gameElements()

maxScoreSaveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Save form btn!');
});