import { getMainElements } from './documentRef';

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
        document.querySelector('.'+playersListArray[activePlayer]).classList.add('active');
    },

    resetPlayersScore: () => {
        Object.keys(getMainElements).forEach((mainElemsKey) => {
            getMainElements[mainElemsKey].innerHTML = 0;
        });
    }
}