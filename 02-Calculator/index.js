import { Calculator } from './Calculator.js'

window.Calculator = Calculator;

let numpad = document.querySelector(".numpad");
    calculation = document.querySelector("#calculation"),
    solution = document.querySelector("#solution");

window.calc = new Calculator(numpad,calculation,solution);
