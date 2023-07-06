
//Yahtzee!
//You'll be needing that dice function you wrote yesterday for this one!
//Write me a new function called "Yahtzee" that calls on the dice method.
//Pass into that method a 6 for the first parameter and a 5 for the second one.
//Add logic that tests the results of the dice. You might need to modify the
//original dice rolling method for this. Have the Yahtzee function log
//if the roll includes a three of a kind, a four of a kind, or a full house,
//and indicates what number is associated with each. Don't worry about
//telling the function which to choose. For now, just have it indicate
//if either of those three results are possible.



function Yahtzee() {
    roll = DiceForYahtzee(6, 5);
    map = {};
    for (let rolls of roll) {
        if (!map[rolls]) {
            map[rolls] = 1;
        }
        else {
            map[rolls] ++
        }
    }
    let twoTracker;
    let threeTracker;
    let fourTracker;
    let fiveTracker;
    console.log(map)
    for (let key in map) {
        if (map[key] === 2) {
            twoTracker = true;
        }
        else if (map[key] === 3) {
            threeTracker = true;
        }
        else if (map[key] === 4) {
            fourTracker = true;
        }
        else if (map[key] === 5) {
            fiveTracker = true;
        }
    }
    switch (true) {
        case twoTracker && threeTracker:
            return "Full House";
        case threeTracker:
            return "Three of a kind";
        case fourTracker:
            return "Four of a kind"
        case fiveTracker:
            return "Yahtzee!";
        default:
            return "Chance";
    }
}


console.log(Yahtzee());


function DiceForYahtzee(sides, rolls) {
    if (sides < 2 || sides % 2 !== 0) {
        return "Error";
    }

    let roll = [];


    for (let i = 0; i < rolls; i++) {
        roll.push(Math.floor(Math.random() * sides) + 1);
    }

    return roll;
}

