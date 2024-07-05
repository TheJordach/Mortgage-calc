import { Component } from '@angular/core';
import { Mortgage } from '../../data/Mortgage';
import { FormControl, FormGroup } from '@angular/forms';
import { MortgageCalculatorService } from '../../shared/calculator/mortgage-calculator.service';

@Component({
  selector: 'app-calculator-ui',
  templateUrl: './calculator-ui.component.html',
  styleUrl: './calculator-ui.component.scss',
})
export class CalculatorUiComponent {
  constructor(private mortgageCalculatorService: MortgageCalculatorService) {}
  clearAll() {
    this.mortgage = {
      monthlyPayment: 0,
      interestPayment: 0,
      principalAmount: 0,
      interestRate: 0,
      numberOfPayments: 0, //Mortgage Term
      mortgageType: null,
    };
    this.mortgageForm.reset();
    console.log('All fields cleared');
  }
  mortgage: Mortgage = {
    monthlyPayment: 0, //calculated values
    interestPayment: 0, //calculated values
    principalAmount: 0,
    interestRate: 0,
    numberOfPayments: 0, //Mortgage Term
    mortgageType: null,
  };

  //Form Group -------------------------
  mortgageForm = new FormGroup({
    principalAmount: new FormControl('', { nonNullable: true }),
    numberOfPayments: new FormControl('', { nonNullable: true }),
    interestRate: new FormControl('', { nonNullable: true }),
    mortgageType: new FormControl('', { nonNullable: true }),
  });

  get principalAmount(): number {
    const principalAmount = this.mortgageForm.controls['principalAmount'].value;
    this.mortgage.principalAmount = parseInt(principalAmount);
    return this.mortgage.principalAmount;
  }

  get numberOfPayments(): number {
    const numberOfPayments =
      this.mortgageForm.controls['numberOfPayments'].value;
    this.mortgage.numberOfPayments = parseInt(numberOfPayments);
    return this.mortgage.numberOfPayments;
  }

  get interestRate(): number {
    const interestRate = this.mortgageForm.controls['interestRate'].value;
    this.mortgage.interestRate = parseFloat(interestRate);
    return this.mortgage.interestRate;
  }

  get mortgageType(): string {
    const currentValue = this.mortgageForm.controls['mortgageType'].value;
    if (currentValue !== null) {
      this.mortgage.mortgageType = currentValue;
    }
    return <string>this.mortgage.mortgageType;
  }

  get monthlyPayment(): number {
    return this.mortgage.monthlyPayment;
  }
  calculateMortgage() {
    if (this.formIsValid()) {
      switch (this.mortgage.mortgageType) {
        case 'REPAYMENT':
          this.mortgage.monthlyPayment = this.calculateMonthlyPayment();
          console.log(this.mortgage.monthlyPayment);
          break;
        case 'INTEREST_ONLY':
          this.mortgage.interestPayment = this.calculateInterestOnly();
          console.log(this.mortgage.monthlyPayment);

          break;
      }
    } else {
      console.log('Form is not valid');
    }
  }

  calculateMonthlyPayment() {
    return this.mortgageCalculatorService.calculateMonthlyInterestOnlyMortgage(
      this.principalAmount,
      this.interestRate,
    );
  }
  calculateInterestOnly() {
    return this.mortgageCalculatorService.calculateMonthlyRepaymentMortgage(
      this.principalAmount,
      this.numberOfPayments,
      this.interestRate,
    );
  }

  formIsValid() {
    return this.mortgageForm.valid;
  }
}
