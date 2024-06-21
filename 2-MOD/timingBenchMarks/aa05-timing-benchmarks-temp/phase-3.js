const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  function addNums10(increment) {
    let res = [];
    let counter = 1;
  
    while( counter <= 10) {
      res.push(addNums(counter * increment))
      counter++
    }
  
    return res
  }
  // Then, add timing code
  startTime = Date.now();
  addNums10(100000);
  endTime = Date.now();
  


  // Your code here 
  console.log(`Runtime: ${endTime - startTime}ms`)

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here 

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
