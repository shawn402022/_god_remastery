

/**
 * JavaScript Arrays Big-O Project
These exercises will help you understand common JavaScript array functions by testing and analyzing their time complexity.

Learning Goals
Determine the time and space complexity based on analysis of the function
Determine the time complexity of some of the built-in Array functions
Prove your time complexity using timing benchmarks
Chart timing benchmarks on Google Sheets

Analyzing Array Functions
In the following exercises, you will analyze the cost of different Array methods: push, pop, shift, unshift, filter, map, reduce, and every.

use the randomNumberArr  function  for testing your code:
 */

/**
 * randomNumberArr generates an array of random numbers of size max. For example, you can use max inputs of 1, 10, 100, 1,000, 10,000, and 100,000. If you decide to use inputs of size larger, your terminal may hang while executing. If this happens, press Ctrl + C to stop the execution.
 */


function randomNumberArr(max) {
    const res = new Array();

    for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * Math.floor(max));

        res.push(randomNumber);
    }

    return res;
}



/**
 * push
Use the randomNumberArr function and the following pushTest function to test the runtime of JavaScript's push with different array sizes. The pushTest function iterates n number of times where n is the size of an array, and pushes each element into a new array.
 */

function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i)

    }


}

let n = 100000;
console.time(`pushTest(${n}): `);
pushTest(n);
console.timeEnd(`pushTest(${n}): `);
