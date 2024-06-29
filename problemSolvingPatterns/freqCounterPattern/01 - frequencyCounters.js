/**
 * FREQUENCY COUNTER PATTERNS
 * this pattern uses objects or sets to collect values/frequencies of values
 * this can often avoid the need for nested loops os 0(N^2) operations with arrays and strings
 */



//Example 1, Frequency Counter
// Write a function called same, which accepts two arrays.
//The function should return true if every value int he array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // loop over arr1
    for(let val of arr1){
        // if there is nothing there then initialize, if there is,  add 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // loop over arr2
    for(let val of arr2){
        // if there is nothing there then initialize, if there is,  add 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // loop over frequencyCounter1 object
    for(let key in frequencyCounter1){
        // if there is no key in freq counter 2 that is a exponent of key in freq counter 1 return false
        if(!(key ** 2 in frequencyCounter2)) return false;
        // if key in freq counter 2 is not an exponent of key in freq counter 1  return false
        if(frequencyCounter2[key ** 2 ] !== frequencyCounter1[key]) return false;

    }
    return true

}

console.log(same([1,2,3,2], [9,1,4,4])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,1], [4,4,1])) // false(the numbers that are a square root of a certain number must occur at the same frequency)
