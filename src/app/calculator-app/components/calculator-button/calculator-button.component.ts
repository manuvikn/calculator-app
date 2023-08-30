import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'ca-calculator-button',
    templateUrl: './calculator-button.component.html',
    styleUrls: ['./calculator-button.component.scss']
})
export class CalculatorButtonComponent implements AfterViewInit {

    @ViewChild('calculatorButton') calculatorButton: ElementRef | undefined;
    @Input() value: string = '';
    @Input() classList: Array<string> = [];
    @Output('clickCalculatorButton') clickCalculatorButtonEmitter: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngAfterViewInit(): void {
        
        if (this.calculatorButton) this.classList.forEach(className => this.calculatorButton?.nativeElement.classList.add( className ));

    }

    clickCalculatorButton(): void {

        this.clickCalculatorButtonEmitter.emit( this.value );

    }

}