import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ca-calculator-buttons-container',
    templateUrl: './calculator-buttons-container.component.html',
    styleUrls: ['./calculator-buttons-container.component.scss']
})
export class CalculatorButtonsContainerComponent {

    @Output() calculatorValueChange: EventEmitter<string> = new EventEmitter();

    viewValue: string = '0';
    firstOperator: number = 0;
    secondOperator: number = 0;

    isOperating: boolean = false;
    clear: boolean = false;

    // Last executed operation
    lastOperation: ((a: number, b: number) => number) | undefined;
    lastClickedButton: string = '';

    // Dictionary with all the operations that we can do
    operationsDictionary: { [key: string]: (a: number, b: number) => number } = {

        '+': (a: number, b: number): number => parseFloat((a + b).toFixed(4)),
        '-': (a: number, b: number): number => parseFloat((a - b).toFixed(4)),
        'x': (a: number, b: number): number => parseFloat((a * b).toFixed(4)),
        '/': (a: number, b: number): number => parseFloat((a / b).toFixed(4))

    };

    constructor() { }

    ngOnInit(): void {
        
        

    }

    emitCalculatorValue(buttonValue: any): void {

        const viewValue: string = this.generateViewValue(buttonValue);
        this.calculatorValueChange.emit(viewValue);

    }

    generateViewValue(buttonValue: string): string {

        const viewValueNumber = parseFloat(this.viewValue);

        let value = this.viewValue;
        if (this.viewValue === '0') value = buttonValue === '.' ? '0' : '';

        if (buttonValue.match(/^[0-9]$/)) {

            if (this.clear) {

                value = buttonValue;
                this.clear = false;

            } else {

                value += buttonValue;

            }

        } else if (buttonValue.match(/^[\+\-\x\/]$/)) {

            if (this.lastClickedButton != buttonValue) {

                this.clear = true;
                this.isOperating = true;

                if (this.lastOperation != undefined && !this.operationsDictionary[this.lastClickedButton]) {

                    this.firstOperator = this.firstOperator == 0 ? viewValueNumber : this.lastOperation(this.firstOperator, viewValueNumber);

                } else {

                    this.firstOperator = viewValueNumber;

                }

                value = this.firstOperator.toString();
                this.lastOperation = this.operationsDictionary[buttonValue];


            }



        } else {

            const buttonActions: any = {

                '.': () => {

                    if (!value.includes('.')) value += buttonValue;

                },
                '=': () => {

                    if (this.lastOperation == undefined) return;

                    if (this.isOperating) {

                        // If isOperating means that you are going to get the result of a new operation that
                        // you just did
                        this.secondOperator = viewValueNumber;
                        this.firstOperator = this.lastOperation(this.firstOperator, this.secondOperator);

                        this.isOperating = false;

                    }
                    else {

                        // Otherwise you are clicking equal button to process a saved operation
                        this.firstOperator = this.lastOperation(viewValueNumber, this.secondOperator);

                    }

                    value = this.firstOperator.toString();
                    this.firstOperator = 0;
                    this.clear = true;

                },
                'DEL': () => value = '',
                'RESET': () => {

                    value = '';
                    this.lastOperation = undefined;

                }

            };

            buttonActions[buttonValue] != undefined ? buttonActions[buttonValue]() : undefined;

        }

        this.lastClickedButton = buttonValue;
        return this.formatViewValue(value);

    }

    formatViewValue(viewValue: string): string {

        // Test if the view value is bigger than our maximum value
        if (parseFloat(viewValue) >= 999999999999) viewValue = '999999999999';
        if (viewValue.length > 12) viewValue = viewValue.slice(0, 12);
        
        // We set the viewValue value and then format the number in order to 
        // add dot each three numbers and the decimal part, finally we return the value 
        this.viewValue = viewValue === '' ? '0' : viewValue;
        
        const [naturalPart, decimalPart]: Array<string> = viewValue.split( '.' );
        const len: number = naturalPart.length;
        let value: string = '';
        let interval: number = 0;
        
        for (let i = len - 1; i >= 0; i--) {

            const char = naturalPart[i];

            if (char.match(/^[0-9]$/)) {

                interval++;

                if (interval > 3) {

                    value = value.concat('.');
                    interval = 1;

                }

                value = value.concat(char);

            }

        }

        value = [value.split('').reverse().join(''), decimalPart].filter(Boolean).join(',');
        return value;

    }
    
}