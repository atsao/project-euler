/*
10001st Prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const nthPrime = (n) => {
  let counter = 0;
  let currentNumber = 2;

  do {
    if (isPrime(currentNumber)) {
      counter++;
    }

    counter < n && currentNumber++;

  } while (counter < n);

  return currentNumber;
}

const isPrime = (number) => {
  if (number < 1) return false;
  if (number === 1) return false;
  if (number === 2) return true;
  if (number === 3) return true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(nthPrime(6)); // 13
console.log(nthPrime(100)); // 541
console.log(nthPrime(1000)); // 7919
console.log(nthPrime(10001)); // 104743
