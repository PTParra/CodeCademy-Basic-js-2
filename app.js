//const for my age
const myAge = 25;

//variable created for the early years to calculate age on dog years
let earlyYears = 2;
earlyYears *= 10.5;

//variable created for the later years to calculate age on dog years
let laterYears = myAge - 2;

//operation done to calculate the later years on dog years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//Calculation of years on dog years
let myAgeInDogYears = (earlyYears + laterYears);

let myName = 'Patricio'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);