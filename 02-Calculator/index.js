import { Calculator } from "./Calculator.js";

window.Calculator = Calculator;

let numpad = document.querySelector(".numpad"),
    calculation = document.querySelector("#calculation"),
    solution = document.querySelector("#solution");


//console.log(numpad.children);
window.calc = new Calculator(numpad, calculation, solution);

