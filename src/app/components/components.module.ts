import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorUiComponent } from './calculator-ui/calculator-ui.component';
import { DisplayUiComponent } from './display-ui/display-ui.component';



@NgModule({
  declarations: [
    CalculatorUiComponent,
    DisplayUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorUiComponent,
    DisplayUiComponent
  ]
})
export class ComponentsModule { }
