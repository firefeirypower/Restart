const prompt = require("prompt-sync")();

const target = Math.round(Math.random()*100);
console.log(target);


let guesses = 0;
while(true){
    guesses++;
    const guess = Number(prompt("Guess the number (0-100): "));
    if(guess > target) {
        console.log("Your guess is too high.");
        continue;
    }
    if (guess < target) {
        console.log("Your guess is too low. ");
        continue;
    }
    console.log("You won! It took ", guesses," number of guesses");
    break;
}