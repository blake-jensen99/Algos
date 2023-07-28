// Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

// A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

// For instance:

// [3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

// [3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
// After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

// For instance:

// [3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
// Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).

// Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).

// Given an array, calculate the number of liked spots.

const arr1 = [2,4,6,8];
const n1 = 7;

const arr2 = [1,3,5,7];
const n2 = 8;

const arr3 = [1,2,3,4];
const n3 = 9;

const arr4 = [8,2,3,4];
const n4 = 1;


function evenVsOdd(arr, n) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (n % 2 === 0) {
            if (arr[i] % 2 === 0 || arr[i+1] % 2 === 0) {
                sum ++;
            }
            else {
                continue;
            }
        }
        else {
            if (arr[i] % 2 !== 0 || arr[i+1] % 2 !== 0) {
                sum ++;
            }
            else {
                continue;
            }
        }
    }
    return sum;
}

console.log(evenVsOdd(arr1, n1))
console.log(evenVsOdd(arr2, n2))
console.log(evenVsOdd(arr3, n3))
console.log(evenVsOdd(arr4, n4))