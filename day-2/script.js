
 //---------------- Declare variables for a person’s ---------------------//
let name = "Fahad";
const age = 29;
let isStudent = true;
const favoriteLanguage = "JavaScript";

//------------------ Print the values to the console --------------//
console.log(age);

//----------observe errors --------- //
 //let name = "Atifa" // Uncaught SyntaxError: Identifier 'name' has already been declared
//name = "Atifa"
//console.log(name); // Atifa

//const favoriteLanguage; // Uncaught SyntaxError: Identifier 'favoriteLanguage' has already been declared

//----------Create an object and an array, assign -----//


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

let person2 = person;

person2.age = 52;

console.log(person2.age); // 52
console.log(person); // 52


const cars = ["Saad", "Volvo", "BMW"];
cars.push("Tesla");
console.log(cars);

