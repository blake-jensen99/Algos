// Carlos is a huge fan of something he calls smooth sentences.

// A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

// The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

// Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

const s1 = "MartA appreciated deep perpendicular right trapezoids";
// TRUE

const s2 = "Someone is outside the doorway";
// FALSE

const s3 = "She eats super Righteously";
// TRUE

function isSmooth(s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][arr[i].length-1].toLowerCase() !== arr[i + 1][0].toLowerCase()) {
            return false;
        }
    }
    return true;
}


console.log(isSmooth(s1))
console.log(isSmooth(s2))
console.log(isSmooth(s3))