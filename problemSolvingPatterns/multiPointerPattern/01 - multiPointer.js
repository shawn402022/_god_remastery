/**
 * MULTIPLE POINTERS PATTERN
 *
 * Creating pointers or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition
 *
 *VERY efficient for solving problems wit minimal space complexity as well
*/

 //Example 1, SumZero
 // Write a function called sumZero which accepts a sorted array of integers.
 //The function should find the first p;air where the sum is 0.
 //Return an array that includes both values that sum to zero or undefined if a pair does not exist
function sum(val1, val2){
    return val1 + val2
}




function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }

}

 console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
 console.log(sumZero([-2,0,1,3])) // undefined
 console.log(sumZero([1,2,3])) // undefined
