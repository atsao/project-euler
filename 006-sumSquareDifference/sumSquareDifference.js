/*
Sum Square Difference

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumSquareDifference = (endRange) => {
  let sumOfSquares = 0;
  let squareOfSum = 0;

  for (let i = 1; i <= endRange; i++) {
    sumOfSquares += Math.pow(i, 2);
  }

  for (let i = 1; i <= endRange; i++) {
    squareOfSum += i;
  }

  squareOfSum = Math.pow(squareOfSum, 2);

  return Math.abs(sumOfSquares - squareOfSum);
}

console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(100)); // 25164150