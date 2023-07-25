// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".

const arr1 = [1,2,3,4,5,6,7]

const arr2 = [8,9,10,11,12]

const arr3 = [124, 23523, 124315763, 124124]

const arr4 = [1, 235, 35747, 2354, 33]


function sevenBoom(arr) {
    for (let i = 0; i < arr.length; i++) {
        let string = arr[i].toString();
        for (let s in string) {
            if (string[s] == "7") {
                return "BOOM!";
            }
        }
    }
    return "there is no 7 in the array";
}

console.log(sevenBoom(arr1))
console.log(sevenBoom(arr2))
console.log(sevenBoom(arr3))
console.log(sevenBoom(arr4))




