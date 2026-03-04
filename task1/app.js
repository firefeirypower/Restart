const prompt = require("prompt-sync")()

let correctAnswears = 0;
const totalQuestions = 3;


console.log("Welcome to the best game you could have ever signed for! ")

const answear1 = prompt("What is the best season of the year?  ");

const correctAnswear1 = "WINTER";
if(answear1.toUpperCase() == correctAnswear1){
    console.log("You are right!")
    correctAnswears ++;
} else{
    console.log("Not pretty that one...")
}

const answear2 = prompt("What year was born the best person in the world? ");

const correctAnswear2 = "2002"
if(answear2 == correctAnswear2){
    console.log("You are right!");
    correctAnswears ++;
} else{
    console.log("Not pretty that one...")
}

const answear3 = prompt("Would you play valorant with me? ");

const correctAnswear3 = "YES"
if(answear3.toUpperCase() == correctAnswear3){
    console.log("You are right!");
    correctAnswears ++;
} else{
    console.log("Not pretty that one...")
}

const percent = Math.round(correctAnswears/totalQuestions)*100;

console.log("You got ", correctAnswears, " correct answears");
