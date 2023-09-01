import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorAppService } from '../../services/calculator-app.service';
import { Subscription, fromEvent, map } from 'rxjs';

@Component({
    selector: 'ca-calculator-buttons-container',
    templateUrl: './calculator-buttons-container.component.html',
    styleUrls: ['./calculator-buttons-container.component.scss']
})
export class CalculatorButtonsContainerComponent implements OnInit, OnDestroy {

    clickedButton: string = '';
    clickedButtonSubscription: Subscription | undefined;

    constructor(private calculatorAppService: CalculatorAppService) { }

    ngOnInit(): void {
        
        this.clickedButtonSubscription =
        fromEvent<KeyboardEvent>( document, 'keydown' )
        .pipe(
            map<KeyboardEvent, string>(({key}) => {
                const dictionary: {[key: string]: string} = {',': '.', 'Backspace': 'DEL', 'Escape': 'RESET', 'Enter': '=', '*': 'x'};
                return dictionary[key] || key;
            }),
        )
        .subscribe(this.emitCalculatorValue.bind(this));

    }

    ngOnDestroy(): void {
        
        this.clickedButtonSubscription?.unsubscribe();

    }

    emitCalculatorValue(buttonValue: any): void {

        this.clickedButton = buttonValue;
        this.calculatorAppService.generateViewValue(buttonValue);

    }


}