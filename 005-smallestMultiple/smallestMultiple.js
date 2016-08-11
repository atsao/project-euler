/*
Smallest Multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const smallestMultiple = (maxDivisor) => {
  let smallestMultiple = 1;
  let i = 1;

  if (maxDivisor < 1) {
    return;
  }

  // Use least common multiple
  for (let i = 1; i <= maxDivisor; i++) {
    smallestMultiple = lcm(smallestMultiple, i);
  }

  return smallestMultiple;
}

const lcm = (a, b) => {
  let leastCommonMulitple = 1;
  let multiplesA = [];
  let multiplesB = [];
  let commonMultiples = [];

  for (let i = 1; i <= a * b; i++) {
    multiplesA.push(a * i);
  }

  for (let i = 1; i <= a * b; i++) {
    multiplesB.push(b * i);
  }

  let ai = 0;
  let bi = 0;

  while (ai < multiplesA.length && bi < multiplesB.length) {
    if (multiplesA[ai] < multiplesB[bi]) {
      ai++;
    } else if (multiplesA[ai] > multiplesB[bi]) {
      bi++;
    } else {
      commonMultiples.push(multiplesA[ai]);
      ai++;
      bi++;
    }
  }

  leastCommonMulitple = commonMultiples[0];

  return leastCommonMulitple;
}

console.log(smallestMultiple(10)); // 2520
// Requires a lot of computing power...
// console.log(smallestMultiple(20)); // 232792560 