/*
Largest Palindrome Product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const largestPalindromeProduct = (numberDigits) => {
  let result = 0;
  let currentProduct = 0;

  if (numberDigits !== 2 && numberDigits !== 3) return null;

  if (numberDigits === 2) {
    for (let i = 99; i > 1; i--) {
      for (let j = i; j > 1; j--) {
        currentProduct = i * j;

        if (isNumberPalindrome(currentProduct) && currentProduct > result) {
          if (currentProduct.toString().length >= result.toString().length) {
            result = currentProduct;
          }
        }

      }
    }
  } else {
    for (let i = 999; i > 100; i--) {
      for (let j = i; j > 100; j--) {
        currentProduct = i * j;

        if (isNumberPalindrome(currentProduct) && currentProduct > result) {
          if (currentProduct.toString().length >= result.toString().length) {
            result = currentProduct;
          }
        }

      }
    }
  }

  return result;
}

const isNumberPalindrome = (number) => {
  let numberString = number.toString();
  let length = numberString.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (numberString[i] !== numberString[length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(largestPalindromeProduct(2)); // 9009
console.log(largestPalindromeProduct(3)); // 580085