import { Component } from "@angular/core";

@Component({
    selector: 'ca-calculator-box',
    templateUrl: './calculator-box.component.html',
    styleUrls: ['./calculator-box.component.scss']
})
export class CalculatorBoxComponent {

    calculatorValue: string = '0';

    constructor() { }

    emitCalculatorValue(calculatorValue: any): void {
        
        this.calculatorValue = calculatorValue;

    }

}