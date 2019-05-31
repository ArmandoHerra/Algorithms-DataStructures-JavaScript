// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {}
    let max = {
        k: "",
        v: 0
    }
    for (let char of str) charMap[char] = ++charMap[char] || 1
    for (let key in charMap) {
        if (charMap[key] > max.v) {
            max.k = key; 
            max.v = charMap[key]
        }
    }
    return max.k
}

/*

    *** Personal Solution ***

    function maxChar(str) {
        let charMap = {}
        let max = {
            k: "",
            v: 0
        }
        for (let char of str) charMap[char] = ++charMap[char] || 1
        for (let key in charMap) {
            if (charMap[key] > max.v) {
                max.k = key; 
                max.v = charMap[key]
            }
        }
        return max.k
    }

*/

module.exports = maxChar