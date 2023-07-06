//Roll the Dice!
//Write me a function that receives two parameters:
//1-The number of sides you want the dice to have
//2-The number of times you want to roll them
//The function should error out if the first parameter is less than 2 or is odd.
//Create the logic to roll an imaginary set of dice with the number of sides
//equal to the first paramater, and the number of times equal to the second.
//Log the result of each roll. Log the sum of all rolls. Return the sum.

function Dice(sides, rolls) {
    if (sides < 2 || sides % 2 !== 0) {
        return "Error";
    }

    let sum = 0;


    for (let i = 0; i < rolls; i++) {
        intRoll = Math.floor(Math.random() * sides + 1) + 1;
        console.log("You rolled: " + intRoll);
        sum += intRoll;
    }

    return "Your roll total is: " +sum;
}

console.log(Dice(4,5))

