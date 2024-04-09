#! /usr/bin/env node
import inquirer from "inquirer";

//1) computer will generate a random number -->done
//2)User input for guessing number -->done
//3)compare user input with computer generated number show result -->

const randomNumber=Math.floor(Math.random()*5+1);

const answer =  await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number 1 to 4 =",

    },

])
if(answer.userGuessedNumber===randomNumber){
    console.log("Congrates you guessed a Correct Number")
}else{
    console.log("Sorry you did not guessed a correct number")
}

console.log(answer);