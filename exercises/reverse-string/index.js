// --- Directions ---
// Given a string, return a new string with the reversed
// order of characters
// --- Examples ---
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseString(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverseString("Test");

/* 

    *** ES6 Syntax + Array Helper reduce() ***

    function reverseString(str) {
        return str.split('').reduce((rev, char) => char + rev, '');
    }

    *** Traditional style reversing. (No manual iteration) ***

    function reverseString(str) {
        let reversed = "";
        for (let character of str) {
            reversed = character + reversed;
        }
        return reversed;
    }

    *** Using Array and string functions. ***

    function reverseString(str) {
        const arr = str.split('');
        arr.reverse();
        return arr.join('');
    }

    *** BONUS ***: You can also write a shorthand like this:

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

*/

module.exports = reverseString;