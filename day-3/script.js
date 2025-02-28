//console.log('Day 3');

// 1. Odd or Even?
let number1 = 5;
console.log(number1 % 2 ? "Odd" : "Event");

// 2. Do you have a Driving License?
let age = 65;
const validDriving = age >= 18 && age <= 65 ? "eligible " : "Not eligible ";
console.log(validDriving);

// 3. Calculate CTC with a Bonus

let salary = 12300;
let annualSalary = 12300 * 12;

let annualBonus = annualSalary * 0.2;
let CTS = annualSalary + annualBonus;
console.log(annualBonus);
console.log(CTS);

// 4. Write a program for the Traffic Light Simulation.
const color = "blue";

let TrafficSignal = color === "red" ? "Stop" : color === "green" ? "Go" : "";
console.log(TrafficSignal);

// 5. Create an Electricity Bill Calculator

let units = 3;
let totalUnitMonth = 3 * 30;
let unitCostPerMonth = 150 * totalUnitMonth;
let unitCostAnnual = unitCostPerMonth * 12;

let annualDiscount = unitCostAnnual * 0.2;
let annualTotalBill = unitCostAnnual - annualDiscount;
console.log(unitCostAnnual);
console.log(annualTotalBill);

// 6. Leap Year Checker
let year = 2020;

let leapYear =
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    ? console.log(`Leap year`)
    : console.log("Not Leap year");

// 7. Max of Three Numbers

let p = 20;
let q = 26;
let r = 54;

let maxNumber = (p > q) ? (p > r ? p : r) : (p > r ? q : r);
console.log(`The maximum number is ${maxNumber}`);