//BalanceCheckbook 2
//Add logic to the BalanceCheckbook function that will find the values
//listen in the "Account" array that are not accounted for in the 
//"Checkbook" array if the sums are not equal. You'll need to modify
//those arrays to test your function.

let Account = [344.50,-12.49,-26.70,-99.11,200.00,200.00,-46.99, 1, 2, 3, 4, 344.50]
let CheckBook = [344.50,-12.49,-26.70,-99.11,200.00,200.00,-46.99]



function BalanceCheckbook2(Account, CheckBook) {
    let unaccounted = []
    let funtCheckbook = CheckBook
    for (int in Account) {
        if (!funtCheckbook.includes(Account[int])) {
            unaccounted.push(Account[int])
            
        }
        else {
            let idx = funtCheckbook.indexOf(Account[int])
            funtCheckbook.splice(idx, 1)
        }
    }
    if (unaccounted.length > 0) {
        return unaccounted + " is/are unaccounted for."
    }
    else {
        return "Account is balanced"
    }
}

console.log(BalanceCheckbook2(Account, CheckBook))



