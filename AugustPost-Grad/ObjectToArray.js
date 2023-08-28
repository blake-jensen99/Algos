// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

const obj1 = { a: 1, b: 2 };
const obj2 = { shrimp: 15, tots: 12 };

function objectToArray(obj) {
    let result = [];
    for(const item in obj) {
        let add = [];
        add.push(item);
        add.push(obj[item]);
        result.push(add);
    }
    return result;
}

console.log(objectToArray(obj1));
console.log(objectToArray(obj2));