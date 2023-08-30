import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        path: 'calculator-app',
        loadChildren: () => import('./calculator-app/calculator-app.module').then(m => m.CalculatorAppModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'calculator-app'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot( ROUTES ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }