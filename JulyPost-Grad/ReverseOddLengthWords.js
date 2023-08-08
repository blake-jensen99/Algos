// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.

function reverseOdd(s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            console.log(arr[i])
            arr[i] = arr[i].split("").reverse().join("");
        }
    }
    let result = arr.join(" ")
    return result;
}

console.log(reverseOdd("Let them come"))
console.log(reverseOdd("These sentences will work with no issues at all"))
console.log(reverseOdd("I'm certain this'll reverse"))