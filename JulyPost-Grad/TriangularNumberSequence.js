// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
// 1, 3, 6, 10, 15

// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.


function triangle(n) {
    let dots = 0;
    let step = 1;
    for (let i = 0; i < n; i ++) {
        dots += step;
        step++;
    }
    return dots;
}

console.log(triangle(1))
console.log(triangle(2))
console.log(triangle(3))
console.log(triangle(4))
console.log(triangle(5))
console.log(triangle(1000))