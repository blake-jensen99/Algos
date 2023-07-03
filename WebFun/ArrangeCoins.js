//https://leetcode.com/problems/arranging-coins/

/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins.
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

*/

function arrangeCoins(n){
    //your code here
    var i = 0;
    for(var x = n; x >= 0; x -= i) {
        if(x > i){
            i++;
        }
    }
    return i;
}


console.log(arrangeCoins(5)) // output: 2
console.log(arrangeCoins(8)) // output: 3
console.log(arrangeCoins(11)) // output: 4