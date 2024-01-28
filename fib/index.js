// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//SOLN to make fib solution faster
function memoise(fn) {
    //create a cache object with function args as keys and result of function call as the values
    //return an anon (IIFE) that will receive the args to run the param fn
        // check if the args exist in the cache object
            //if yes, return the value
        //otherwise create a result variable to store the function call for that argument
        //store the args and the result into the cache as K-V pairs
        // return the result

    const cache = {};
    return (...args) => {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}


// SOLN 1 - Recursion
function slowFib(n) {
    //using recursion
    //console.log/return the nth entry of a fib series
    //each number n = (n - 1) + (n - 2)
    //Base case === n = 0 || n = 1, meaning n < 2 

    if (n < 2) {
        return n;
    }

    return fib(n -1) + fib(n - 2) // once we memoise slowFib, it's the reference to the memoised version that we recursively
}


// SOLN 2 - iteration solution
// function fib(n) {
//     //create a result array
//     //pass in 0, 1 constants
//     //iterate through length of results - from 2 to n
//         //push into result array, the addtion of result[i -1] and result[i-2]
//     //return result[n]
//     const results = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         results.push(results[i- 1] + results[i - 2]);
//     }
//     return results[n];
// }


const fib = memoise(slowFib);

module.exports = fib;
