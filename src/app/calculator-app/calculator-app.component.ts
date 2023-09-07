import { Component, OnInit } from '@angular/core';
import { CalculatorAppService } from './services/calculator-app.service';

@Component({
    selector: 'ca-calculator-app',
    templateUrl: './calculator-app.component.html',
    styleUrls: ['./calculator-app.component.scss'],
    providers: [ CalculatorAppService ]
})
export class CalculatorAppComponent implements OnInit {

    constructor(private calculatorAppService: CalculatorAppService) { }

    ngOnInit(): void {
        
        document.body.classList.add( 'calculator-app' );

    }

    ngOnDestroy(): void {

        document.body.classList.remove( 'calculator-app' );
        this.calculatorAppService.removeTheme();

    }

}