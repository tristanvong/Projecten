import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Met dit programma kan je eenvoudig je resultaat in % omzetten.')
console.log('---')

let behaaldePunt = parseFloat(await userInput.question('Wat is je resultaat? '));
let totaalAantalPunten = parseFloat(await userInput.question('Wat het maximum aantal punten voor deze toets? '));

let consoleOutput = behaaldePunt / (totaalAantalPunten / 10) * 10;

console.log('Je hebt ' + consoleOutput.toFixed(2) + '% behaald.');

process.exit();