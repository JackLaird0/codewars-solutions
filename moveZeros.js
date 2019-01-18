//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = (arr) => {
  let numbs = [];
  let zeros = [];
  arr.forEach( num => { num !== 0 ? numbs.push(num) : zeros.push(num)});
  return [...numbs, ...zeros]
}

const test = moveZeros([1,2,0,1,0,1,0,3,0,1])
  // solution = [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]

console.log(test);