// Adds up positive integers from 1-n
function addNums(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += i
  }
  return res;
}

addNums(5)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += addNums(i);
  }
  return res;
}

addManyNums(3)



module.exports = [addNums, addManyNums];
