//https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

const sum_pairs = (ints, s) => {
  for(let i = 0; i < ints.length; i++) {
    for(let j = 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        return [ints[i], ints[j]]
      }
    }
  }
}

const test = sum_pairs([10, 5, 2, 3, 7, 5], 10)

console.log(test)