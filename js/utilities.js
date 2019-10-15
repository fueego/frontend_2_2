export const utils = {
    randomNumber: (from, to) => {
       const min = Math.ceil(from);
       const max = Math.floor(to);

       return Math.floor(Math.random() * (max - min + 1) + min);
    },

    updateElementContent: (element, content) => {
        element.innerHTML = content;
    }
}