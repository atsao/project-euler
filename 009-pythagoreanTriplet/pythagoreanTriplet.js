/*
Pythagorean Triplet

Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const pythagoreanTriplet = (sum) => {
  let pA = 1;
  let pB = 2;
  let pC = 3;

  for (let a = 1; a < sum; a++) {
    for (let b = a; b < sum; b++) {
      for (let c = b; c < sum; c++) {
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && (a + b + c === sum)) {
          pA = a;
          pB = b;
          pC = c;
          break;
        }
      }
    }
  }

  return pA * pB * pC;
}

console.log(pythagoreanTriplet(12)); // 60
console.log(pythagoreanTriplet(1000)); // 31875000