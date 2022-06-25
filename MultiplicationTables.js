/* If you have no packages installed simply comment out
lines 4 to 16, 26 to 29, and 36 to 37...then uncomment line
18 then manually assign a mutliplication table value to "numero" on line 18*/

const ps = require("prompt-sync");
const prompt = ps();

let numero = prompt("Which times table would you like to see? Please only enter a number value: ");
parseInt(numero);

let name = prompt("Would you like to see your times table in an array format? Please type yes or no: ");
parseInt(name);
name.toLowerCase;
if (name === 'yes'){
    console.log(`You have chosen to diplay the ${numero}'s times table in an array format: `);

    const times =[];
    //let numero = VALUE;
    let counter = 0;
    
    while (counter <= 12){
        times.push(counter * numero);
        counter++;
    }
    console.log(times);
} else {
console.log(`You have chosen to diplay the ${numero}'s times table in a regular format: `);


let goob = 0;

while (goob <= 12){
    console.log(goob * numero);
    goob++;
}

}