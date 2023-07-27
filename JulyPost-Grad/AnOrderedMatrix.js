// Create an ordered 2D array (matrix). 
// A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. 
// Your function needs to create an a × b matrix. a is the first argument and b is the second.

function orderedMatrix(a,b) {
    let matrix = [];
    let counter = 1;
    for (let i = 0; i < a; i++) {
        matrix.push([]);
        for (let j = 0; j < b; j++) {
            matrix[i].push(counter);
            counter++;
        }
    }
    return matrix;
}

console.log(orderedMatrix(1,1))
console.log(orderedMatrix(5,5))
console.log(orderedMatrix(10,10))
