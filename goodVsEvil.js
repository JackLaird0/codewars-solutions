//https://www.codewars.com/kata/good-vs-evil/train/javascript

const winner = (badReducer, goodReducer) => {
  const results = {
    evil: 'Battle Result: Evil eradicates all trace of Good',
    good: 'Battle Result: Good triumphs over Evil',
    tie: 'Battle Result: No victor on this battle field'
  };

  if (badReducer > goodReducer) {
    return results.evil;
  } else if (goodReducer > badReducer) {
    return results.good;
  } else {
    return results.tie;
  }
};

const goodVsEvil = (good, evil) => {

  const goodArr = [1, 2, 3, 3, 4, 10];
  const badArr = [1, 2, 2, 2, 3, 5, 10];

  const goodReducer = scoreTeams(goodArr, good.split(' '));
  const badReducer = scoreTeams(badArr, evil.split(' '));

  return winner(badReducer, goodReducer);
};


const scoreTeams = (arr, arr2) => {
  return arr.reduce((acc, curr, idx) => {
    return acc += (arr2[idx] * curr);
  }, 0)
};

const test = goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')

console.log(test)