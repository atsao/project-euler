/*
Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/

const largestPrimeFactor = (number) => {
  let currentNumber = number;
  let currentFactor = 2;
  let largestPrime = 2;

  while (currentNumber > 1) {
    if (currentNumber % currentFactor === 0) {
      currentNumber /= currentFactor;
    }

    if (currentFactor > largestPrime) {
      largestPrime = currentFactor;
    }

    currentFactor++;
  }

  return largestPrime;
};

console.log(largestPrimeFactor(21)); // 7
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857