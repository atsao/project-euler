/*
Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/

const largestPrimeFactor = (number) => {
  let currentNumber = number;
  let currentFactor = 2;
  let largestFactor = 0;

  while (currentFactor <= currentNumber) {
    if (currentNumber % currentFactor == 0) {
      currentNumber /= currentFactor;
      largestFactor = currentFactor;
    } else {
      currentFactor++;
    }
  }

  if (currentFactor > largestFactor) {
    largestFactor = currentNumber;
  }

  return largestFactor;
};

console.log(largestPrimeFactor(21)); // 7
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
