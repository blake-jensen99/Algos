// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

function arrayOfMultiples(num, length) {
    let multiplyBy = 1;
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(num * multiplyBy);
        multiplyBy ++;
    }
    return arr;
}

console.log(arrayOfMultiples(7,5))
console.log(arrayOfMultiples(12,10))
console.log(arrayOfMultiples(17,6))