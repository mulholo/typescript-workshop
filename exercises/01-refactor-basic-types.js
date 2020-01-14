// Refactor this file to TS

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

/**
 * Generates a list of integers, incremented by 1
 *
 * @example
 * range(1, 3) // [1, 2, 3];
 */
function range(start, end) {
  let list = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

add(4, sub(5, 2)); // ?
range(0, 10); // ?
isPrime(8); // ?
isPrime(2); // ?

export {};
