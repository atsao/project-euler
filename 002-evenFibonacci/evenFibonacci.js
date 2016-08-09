/*
Even Fibonacci Sum

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

const evenFibonacci = (limit) => {
  let sum = 0;
  let fiboNumbers = [];
  let n1 = 0;
  let n2 = 1;

  while (n2 < limit) {
    let n3 = n1 + n2;
    fiboNumbers.push(n3);
    n1 = n2;
    n2 = n3;
  }

  for (let i = 1; i < fiboNumbers.length; i += 3) {
    if (fiboNumbers[i] % 2 === 0) {
      sum += fiboNumbers[i];
    }
  }

  return sum;
}

console.log(evenFibonacci(10)); // 10
console.log(evenFibonacci(100)); // 188
console.log(evenFibonacci(4000000)); // 14328