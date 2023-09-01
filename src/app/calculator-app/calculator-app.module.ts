import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalculatorAppRoutingModule } from "./calculator-app.routing.module";
import { CalculatorAppComponent } from "./calculator-app.component";
import { CalculatorBoxComponent } from "./components/calculator-box/calculator-box.component";
import { CalculatorTextComponent } from "./components/calculator-text/calculator-text.component";
import { CalculatorButtonsContainerComponent } from "./components/calculator-buttons-container/calculator-buttons-container.component";
import { CalculatorButtonComponent } from "./components/calculator-button/calculator-button.component";
import { CalculatorHeaderComponent } from "./components/calculator-header/calculator-header.component";
import { SlideElementComponent } from "./shared/slide-element/slide-element.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CalculatorAppRoutingModule
    ],
    exports: [],
    declarations: [
        CalculatorAppComponent,
        CalculatorBoxComponent,
        CalculatorTextComponent,
        CalculatorButtonsContainerComponent,
        CalculatorButtonComponent,
        CalculatorHeaderComponent,
        SlideElementComponent
    ]
})
export class CalculatorAppModule { }