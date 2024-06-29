/**
 * SLIDING WINDOW PATTERN;
 * This pattern involves creating a window which can either be an array or number from one position to another.
 * Depending on a certain condition, teh window either increases or closes(and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc.
 */

//Example 1, maxSubArraySum:
//Write a function called maxSubArraySum
//which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubArraySum(arr){
    
}


console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubArraySum([4,2,1,6], 1)) // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubArraySum([], 4))// null
