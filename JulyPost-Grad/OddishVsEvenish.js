// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. 
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.


function oddOrEven(n) {
    if (n == 0 ) {
        return "Evenish";
    }
    else if (n < 10) {
        return n % 2 == 0 ? "Evenish" : "Oddish";
    }
    else {
        let string = n.toString();
        let container = string.split("")
        let sum = 0;
        for (let int in container) {
            sum += parseInt(container[int]);
        }
        return sum % 2 == 0 ? "Evenish" : "Oddish";
    }
}

console.log(oddOrEven(17))
console.log(oddOrEven(0))
console.log(oddOrEven(3))
console.log(oddOrEven(92))