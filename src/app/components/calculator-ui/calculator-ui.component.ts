import { Component } from '@angular/core';
import { Mortgage, MortgageType } from '../../data/Mortgage';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator-ui',
  templateUrl: './calculator-ui.component.html',
  styleUrl: './calculator-ui.component.scss',
})
export class CalculatorUiComponent {
  clearAll() {
    this.mortgage = {
      monthlyPayment: 0,
      principalAmount: 0,
      interestRate: 0,
      numberOfPayments: 0, //Mortgage Term
      mortgageType: MortgageType.REPAYMENT,
    };
    this.mortgageForm.reset();
    console.log('All fields cleared');
  }
  mortgage: Mortgage = {
    monthlyPayment: 0,
    principalAmount: 0,
    interestRate: 0,
    numberOfPayments: 0, //Mortgage Term
    mortgageType: MortgageType.REPAYMENT,
  };

  mortgageForm = new FormGroup({
    principalAmount: new FormControl('', { nonNullable: true }),
    numberOfPayments: new FormControl('', { nonNullable: true }),
    interestRate: new FormControl('', { nonNullable: true }),
    mortgageType: new FormControl('', { nonNullable: true }),
  });

  get principalAmount(): number {
    this.clearAll();
    const principalAmount = this.mortgageForm.controls['principalAmount'].value;
    this.mortgage.principalAmount = parseInt(principalAmount);
    return this.mortgage.principalAmount;
  }

  calculateRepayment() {
    console.log(this.principalAmount + ' USD');
  }
}
