import { Component, Input } from "@angular/core";

@Component({
    selector: 'ca-calculator-text',
    templateUrl: './calculator-text.component.html',
    styleUrls: ['./calculator-text.component.scss']
})
export class CalculatorTextComponent {

    @Input() calculatorValue: string = ''; 

    constructor() { }

}