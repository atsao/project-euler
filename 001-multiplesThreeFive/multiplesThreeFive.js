/*
Multipes of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var multiplesThreeFive = function(n) {
  var sum = 0;

  if (n <= 0) {
    return 0;
  }

  for (var i = 0; i < n; i++) {
    if (i % 15 === 0 || i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(multiplesThreeFive(10)); // 23
console.log(multiplesThreeFive(1000)); // 233168