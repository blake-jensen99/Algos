// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. Do not include any extra spaces.

/**
 * @param {string} s
 * @return {string}
 */

s1 = "hello world"
s2 = "one two three"
s3 = "test"
s4 = "test  double  spaces"
s5 = "test   triple   spaces"


var reverseWords = function(s) {
    if (!s.includes(" ")) {
        return s;
    }
    let arr = s.split(" ");
    let result = ""
    for (i = arr.length - 1; i >= 0; i --) {
        if (arr[i] == "") {
            continue;
        }
        if (i === 0) {
            result += arr[i];
        }
        else {
            result += arr[i] + " ";
        }
    }
    return result;
}

console.log(reverseWords(s1))
console.log(reverseWords(s2))
console.log(reverseWords(s3))
console.log(reverseWords(s4))
console.log(reverseWords(s5))