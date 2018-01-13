// --- Directions ---
// Given a string, return a new string with the reversed
// order of characters
// --- Examples ---
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
    To be able to reverse the string in this solution I will be converting the string into an array first by using .split('').

    After I convert it into an array I can use the .reverse() function that allows me to reverse the items in an array.

    And lastly I use the .join('') function to be able to return the array back to a string and return the result.
*/

function reverseString(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

/* 
    *** BONUS: You can also write a shorthand like this:

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

*/

module.exports = reverseString;