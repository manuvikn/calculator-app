import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CalculatorAppService } from "../../services/calculator-app.service";

@Component({
    selector: 'ca-calculator-text',
    templateUrl: './calculator-text.component.html',
    styleUrls: ['./calculator-text.component.scss']
})
export class CalculatorTextComponent implements OnInit, OnDestroy {

    calculatorValue: string = ''; 
    calculatorValueSubscription: Subscription | undefined;

    constructor(private calculatorAppService: CalculatorAppService) { }

    ngOnInit(): void {
        
        this.calculatorValueSubscription = this.calculatorAppService.getCalculatorValue()
            .subscribe(v => this.calculatorValue = v);

    }

    ngOnDestroy(): void {
        
        this.calculatorValueSubscription?.unsubscribe();

    }

}