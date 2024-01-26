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
    //create an array to store chunked subarrays
    const chunkedArr = [];

    for (let element of array) {
        const lastSubArr = chunkedArr[chunkedArr.length - 1];

        if (!lastSubArr || lastSubArr.length === size) {
            chunkedArr.push([element]);
        } else {
            lastSubArr.push(element);
        }
    }

    return chunkedArr;

    //loop through the given array

    //get the last subarray in the new chunked array

    // if chunked array is empty || if last subarray.length === size param

        // create a new subarray containing current element

    // else, add current element to last subarray

    //return chunked array  


}

module.exports = chunk;
