import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorUiComponent } from './calculator-ui/calculator-ui.component';
import { DisplayUiComponent } from './display-ui/display-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculatorUiComponent, DisplayUiComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CalculatorUiComponent, DisplayUiComponent],
})
export class ComponentsModule {}
