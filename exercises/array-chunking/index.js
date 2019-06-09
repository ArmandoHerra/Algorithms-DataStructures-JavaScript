
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = []
    if (array.length % size != 0) {
        for (let x = 0; x < array.length % size; x++) {
            let subArray = array.splice(0, size)
            chunked.push(subArray)
        }
    } else {
        const it = array.length / size
        for (let x = 0; x < it; x++) {
            let subArray = array.splice(0, size)
            chunked.push(subArray)
        }
    }
    return chunked
}

/*

    *** Personal Solution ***

    function chunk(array, size) {
        const chunked = []
        if (array.length % size != 0) {
            for (let x = 0; x < array.length % size; x++) {
                let subArray = array.splice(0, size)
                chunked.push(subArray)
            }
        } else {
            const it = array.length / size
            for (let x = 0; x < it; x++) {
                let subArray = array.splice(0, size)
                chunked.push(subArray)
            }
        }
        return chunked
    }

    *** Other Possible Solution ***
    function chunk(array, size) {
        const chunked = [];
        for (let element of array) {
            const last = chunked[chunked.length - 1]
            if (!last || last.length === size) {
                chunked.push([element])
            } else {
                last.push(element)
            }
        }
        return chunked
    }

    *** Other Possible Solution ***
    function chunk(array, size) {
        const chunked = []
        let index = 0
    }
*/

module.exports = chunk;