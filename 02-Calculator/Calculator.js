import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numPad = numpad;
        this.outputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();
    }

    setupNumPad() { 
        this.numPad.children.array.forEach(element => {
            element.addEventListener("click", this.onButtonClick.bind(this));
        });
    }

    onButtonClick() {
        this.printSolution(this.innerText);
        console.log(this);
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
