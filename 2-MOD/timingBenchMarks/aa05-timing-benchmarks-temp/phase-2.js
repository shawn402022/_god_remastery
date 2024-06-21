const { reverse } = require("./phase-1");
const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let res = [];
  let counter = 1;

  while( counter <= 10) {
    res.push(addNums(counter * increment))
    counter++
  }

  return res
}

//console.log(addNums10(1))

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let res = [];
  let counter = 1;

  while(counter <=10) {
    res.push(addManyNums(counter * increment))
    counter++;
  }

  return res
}

console.log(addManyNums10(10))



module.exports = [addNums10, addManyNums10];
