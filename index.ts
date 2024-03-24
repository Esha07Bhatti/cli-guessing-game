#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input and computer generated number and show result

console.log("Welcome To Guessing Number Game");

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess the number between 1 - 6: ",
    },
])

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed Right Number.");
}else{
    console.log("You Guessed Wrong Number.");
}