//BalanceCheckbook
//Write me a function that takes two parameters:
//1) An array of deposits/deductions from a checking account.
//2) An array of deposits/deductions from a personal checkbook.
//Give the function logic to loop through both arrays and generate a sum,
//then compare the two sums. If they are equal, log "Account is balanced".
//if they are not equal, log "Account is not balanced".

let Account = [344.50,-12.49,-26.70,-99.11,200.00,200.00,-46.99]
let CheckBook = [344.50,-12.49,-26.70,-99.11,200.00,200.00,-46.99]

function BalanceCheckbook(Account, CheckBook){
    let accountSum = 0;
    let checkSum = 0;

    for (int in Account) {
        accountSum += Account[int];
    }
    for (int in CheckBook) {
        checkSum += CheckBook[int];
    }
    return accountSum === checkSum ? "Account is balanced" : "Account is not balanced";
}

// console.log(BalanceCheckbook(Account, CheckBook))


const FunctionalBalanceCheckbook = (Account, CheckBook) => Account.reduce((total, int) => (total += int), 0) === CheckBook.reduce((total, int) => (total += int), 0) ? "Account is balanced" : "Account is not balanced";

console.log(FunctionalBalanceCheckbook(Account, CheckBook))