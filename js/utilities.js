import { getPointElements, playerNamesElements } from './documentRef';

export const utils = {
    randomNumber: (from, to) => {
       const min = Math.ceil(from);
       const max = Math.floor(to);

       return Math.floor(Math.random() * (max - min + 1) + min);
    },

    updateElementContent: (element, content) => {
        element.innerHTML = content;
    },

    setActivePlayer: (playersListArray, activePlayer) => {
        playersListArray.forEach(className => document.querySelector('.'+className).classList.remove('active'));
        document.querySelector('.'+playersListArray[activePlayer-1]).classList.add('active');
    },

    resetView: () => {
        // reset current and final score
        Object.keys(getPointElements).forEach((mainElemsKey) => {
            getPointElements[mainElemsKey].innerHTML = 0;
        });

        // bring back Player Name
        playerNamesElements.player1Name.innerHTML = 'Player 1';
        playerNamesElements.player2Name.innerHTML = 'Player 2';
    },

    getNextPlayer: (activePlayer) => {
        return activePlayer === 1 ? 2 : 1;
    }
}