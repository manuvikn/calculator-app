import { Component } from '@angular/core';
import { CalculatorAppService } from './services/calculator-app.service';

@Component({
    selector: 'ca-calculator-app',
    templateUrl: './calculator-app.component.html',
    styleUrls: ['./calculator-app.component.scss'],
    providers: [ CalculatorAppService ]
})
export class CalculatorAppComponent { }