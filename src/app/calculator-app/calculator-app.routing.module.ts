import { Routes } from "@angular/router";
import { CalculatorAppComponent } from "./calculator-app.component";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        component: CalculatorAppComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class CalculatorAppRoutingModule { }