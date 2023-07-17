// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

let s1 = "bat";
let t1 = "tab";

let s2 = "cat";
let t2 = "dog";


function isAnagram(s, t) {
    if (s.length != t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i ++) {
        if (!t.includes(s[i])) {
            return false
        }
    }
    return true;
}


console.log(isAnagram(s1, t1))
console.log(isAnagram(s2, t2))