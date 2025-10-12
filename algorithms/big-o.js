// Big-O Time Complexity

function summation(n) { // n is the input, to find the sum of first n natural numbers, returns the number
  let sum = 0;
  for (let i = 1; i <= n; i++) { // explanation: loop runs n times, this line is just a repetition of next line
    sum += i; // sum = sum + i
  }
  return sum; // returns the sum
}
console.log(summation(5)); // 15
// explanation: 1+2+3+4+5 = 15, count the numbers of times a statement executes based on the input size (n)
/* Time Complexity: O(n) - linear time complexity, because the loop runs n times,
     as a size of input increases, the time taken increases linearly

 Line 4 executes once, O(1)
 Line 6 executes 5 times, O(n)
 Line 8 executes once, O(1)
  Total time complexity: O(1 + n + 1) = O(n)
  Space Complexity: O(1) - constant space complexity, 
  because we are using a fixed amount of space (sum and i variables) regardless of the input size
*/

// Big-O Calculations
// O(1) - Constant time complexity, the execution time does not change with the input size
function constantTime(n) {
  return n * n; // runs only once
}
function summation2(n) {
  return (n * (n + 1)) / 2; // using the formula to calculate the sum of first n natural numbers, runs only once
}

// Both functions have O(1) time complexity, 
// because they execute a fixed number of operations regardless of the input size
// O(n^2) - Quadratic time complexity, the execution time increases quadratically with the input size
function printPairs(n) {
  for (let i = 1; i <= n; i++) { // runs n times
    for (let j = 1; j <= n; j++) { // runs n times for each iteration of the outer loop
      console.log(i, j); // runs n * n = n^2 times
    }
  }
}
console.log(printPairs(3)); // (1,1) (1,2) (1,3) (2,1) (2,2) (2,3) (3,1) (3,2) (3,3)
/* Time Complexity: O(n^2)
  Line 4 executes n times, O(n)
  Line 5 executes n times for each iteration of the outer loop, O(n)
  Line 6 executes n * n = n^2 times, O(n^2)
  Total time complexity: O(n + n + n^2) = O(n^2)
  Space Complexity: O(1) - constant space complexity, 
  because we are using a fixed amount of space (i and j variables) regardless of the input size
*/

// O(m3) - Cubic time complexity, the execution time increases cubically with the input size
function printTriplets(n) {
  for (let i = 1; i <= n; i++) { // runs n times
    for (let j = 1; j <= n; j++) { // runs n times for each iteration of the outer loop
      for (let k = 1; k <= n; k++) { // runs n times for each iteration of the middle loop
        console.log(i, j, k); // runs n * n * n = n^3 times
      }
    }
  }
}
console.log(printTriplets(2)); // (1,1,1) (1,1,2) (1,2,1) (1,2,2) (2,1,1) (2,1,2) (2,2,1) (2,2,2)
/* Time Complexity: O(n^3)
  Line 4 executes n times, O(n)
  Line 5 executes n times for each iteration of the outer loop, O(n)
  Line 6 executes n times for each iteration of the middle loop, O(n)
  Line 7 executes n * n * n = n^3 times, O(n^3)
  Total time complexity: O(n + n + n + n^3) = O(n^3)
  Space Complexity: O(1) - constant space complexity, 
  because we are using a fixed amount of space (i, j and k variables) regardless of the input size
*/

// O(log n) - Logarithmic time complexity, the execution time increases logarithmically with the input size
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) { // runs log n times
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // found the target
    } else if (arr[mid] < target) {
      left = mid + 1; // search in the right half
    } else {
      right = mid - 1; // search in the left half
    }
  }
  return -1; // target not found
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(numbers, 7)); // 6 (index of the target)
/* Time Complexity: O(log n)
  Line 4 executes once, O(1)
  Line 5 executes log n times, O(log n)
  Lines 6-12 execute log n times in the worst case, O(log n)
  Total time complexity: O(1 + log n + log n) = O(log n)
  Space Complexity: O(1) - constant space complexity, 
  because we are using a fixed amount of space (left, right, mid variables) regardless of the input size
*/

/* Space Complexity
O(1) - Constant space complexity, the space used does not change with the input size
O(n) - Linear space complexity, the space used increases linearly with the input size
O(n^2) - Quadratic space complexity, the space used increases quadratically with the input size
O(log n) - Logarithmic space complexity, the space used increases logarithmically with the input size
O(n!) - Factorial space complexity, the space used increases factorially with the input size
*/ 