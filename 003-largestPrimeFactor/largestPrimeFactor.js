/*
Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/

const largestPrimeFactor = (number) => {
  let largestPrime = 1;
  let primeFactors = [];

  for (let i = 2; i < Math.floor(prime / 2); i++) {
    if (prime % i === 0 && isPrime(i)) {
      primeFactors.push(i);
    }
  }

  for (let value of primeFactors) {
    if (value > largestPrime) {
      largestPrime = value;
    }
  }

  return largestPrime;
};

const isPrime = (number) => {
  for(let i = 2; i < Math.floor(number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(largestPrimeFactor(21)); // 7
console.log(largestPrimeFactor(13195)); // 29
// console.log(largestPrimeFactor(600851475143)); // 29