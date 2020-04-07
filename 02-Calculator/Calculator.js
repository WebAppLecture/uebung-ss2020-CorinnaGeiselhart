import {MyMath} from "../01-MyMath/MyMath.js";


export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numPad = numpad;
        this.outputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();
    }

    setupNumPad() { 
        let numpadLength = this.numPad.children.length;
        for(let i = 0; i < numpadLength; i++) {
            let number = this.numPad.children[i];
            let numberInnerText = number.innerText;
            
            if(numberInnerText !== ""){
                console.log(numberInnerText);
                number.addEventListener("click", this.onButtonClick.bind(this, numberInnerText)); 
            }  
        }
    }

    onButtonClick(symbol) {
        this.printSolution(symbol);
        console.log(symbol);
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
