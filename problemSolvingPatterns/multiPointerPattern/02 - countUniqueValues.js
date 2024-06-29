/**
 * MULTIPLE POINTERS PATTERN
 *
 * Creating pointers or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition
 *
 *VERY efficient for solving problems wit minimal space complexity as well
*/

//Example 2, countUniqueValues:
//implement a function called countUniqueValues,
//which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted.




//PSEUDO CODE: Teacher attempt
//create two variables, one for i and one for j
//start i at index 0, and j at index 1
//create a while loop that says while j is less than  the array length -1
//compare the values at i and j
//if the values are the same then increment j 1 step
//if the values are different then increment i 1 step, and change the value i to  the value at j
//return the index at i plus 1
function countUniqueValues(sortedArr) {
    let i = 0;
    if(!sortedArr.length) return 0
    for (let j = 1; j < sortedArr.length; j++) {
        if(sortedArr[i] !== sortedArr[j]) {
            i++;
            sortedArr[i] = sortedArr[j];
        }
    }
    return i + 1
}
/*
//PSEUDO CODE: My attempt
//create a counter to count unique values
//loop through sorted array
//if i + 1 is not equal to i  then add to counter
//return counter
function countUniqueValues(sortedArr) {
    let counter = 0;
    if(!sortedArr.length) return 0;
    for (let i = 0; i < sortedArr.length; i++) {
        const curr = sortedArr[i];
        const next = sortedArr[i+1];
        if(next !== curr) counter++
    }
    return counter
}
*/
console.log(countUniqueValues([1,1,1,1,1,2])) // 2;
console.log(countUniqueValues([1,2,3,4,4,7,7,12,12,13])) // 7;
console.log(countUniqueValues([])) // 0;
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4;
