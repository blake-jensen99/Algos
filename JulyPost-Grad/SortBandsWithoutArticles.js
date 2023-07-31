// Create a function that sorts the given array of band names discounting the articles "The", "A", "An" if the first word of the name categorically belongs to.

// Examples
// bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"])
// ➞ ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]

// bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"])
// ➞ ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]

// bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"])
// ➞ ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]

const arr1 = ["The Who", "Led Zeppelin", "Pink Floyd", "The Rolling Stones", "The Police", "A Band", "An Emergency"]

function sortWithoutArticles(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("The ")) {
            newArr.push(arr[i].slice(4));
        }
        else if (arr[i].includes("An ")) {
            newArr.push(arr[i].slice(3));
        }
        else if (arr[i].includes("A ")) {
            newArr.push(arr[i].slice(2));
        }
        else {
            newArr.push(arr[i]);
        }
    }
    newArr.sort();
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].includes(newArr[i])) {
                newArr[i] = arr[j];
            }
        }
    }
    return newArr;
}

console.log(sortWithoutArticles(arr1))