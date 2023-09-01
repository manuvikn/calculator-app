import { AfterViewInit, Component, ElementRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { CalculatorAppService } from "../../services/calculator-app.service";

@Component({
    selector: 'ca-slide-element',
    templateUrl: './slide-element.component.html',
    styleUrls: ['./slide-element.component.scss']
})
export class SlideElementComponent implements AfterViewInit {

    @ViewChild('slideValue') slideValue: ElementRef | undefined;

    private readonly themeValues: Array<string> = [ '4px', '29px', '54px' ];
    themeValue: number = 0;

    constructor(private cd: ChangeDetectorRef,
                private calculatorAppService: CalculatorAppService) {}

    ngAfterViewInit(): void {
        
        if (!this.slideValue) return;

        this.themeValue = parseInt( localStorage.getItem( 'theme' ) || '0' );
        this.toggleValue();
        this.cd.detectChanges();

    }

    toggleValue(): void {
        
        if (!this.slideValue) return;

        this.slideValue.nativeElement.style.left = this.themeValues[ this.themeValue ];
        this.setLocalStorageValue( this.themeValue );
        this.calculatorAppService.setTheme( this.themeValue );

    }

    setLocalStorageValue( theme: number ): void {

        localStorage.setItem( 'theme', theme.toString() );

    }

}