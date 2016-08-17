/*
Summation of Primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const summationPrimes = (limit) => {
  let sum = 0;

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(summationPrimes(10)); // 17
console.log(summationPrimes(100)); // 1060
console.log(summationPrimes(2000000)); // 142913828922