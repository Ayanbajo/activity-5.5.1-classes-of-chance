class Casino {
    // Write code here
    constructor(name, fakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.fakeCoin = fakeCoin;
    }
    updateToken(token) {
        this.fakeCoin = token
    }

    playGame(betAmount) {
        this.timesPlayed +=1
        if (Math.random() <= 0.5 || !this.fakeCoin) {
        console.log(`${this.name} wins`)
    } else {
        const winAmount = betAmount * (this.timesPlayed + 1)
        console.log (`You Won ${winAmount} !`);
    }
   
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino", false);
console.log(myCasino);
myCasino.updateToken(false);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.updateToken(true);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/

// if (this.isFakeCoin = true) 
//     console.log(`${this.name} wins`)
//     else (
//     console.log (`You Won`)
// )