/**
 * DIVIDE AND CONQUER
 *
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity
 */

// EXAMPLE 1, search;
// Given a sorted array of integers, write a function called search
// it will accept a value and return the index where the value is passed to the function.
// If the value is not found, return -1

function search(arr, val){
    let min = 0;
    let max = arr.length -1;

    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        let curr = arr[mid];

        if(curr < val ) {
            min = mid + 1;
        } else if(curr > val) {
            max = mid -1
        } else {
            return mid
        }

    }
    return -1
}

console.log(search([1,2,3,4,5,6],4)) //3
console.log(search([1,2,3,4,5,6],6)) //5
console.log(search([1,2,3,4,5,6],11)) //-1
