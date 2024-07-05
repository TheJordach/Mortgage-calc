import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MortgageCalculatorService {
  constructor() {}

  /**
   * Calculate the monthly repayment amount for a repayment mortgage
   * @param mortgageAmount - The total loan amount
   * @param mortgageTerm - The loan term in years
   * @param interestRate - The annual interest rate in percentage
   * @returns The monthly repayment amount
   */

  calculateMonthlyRepaymentMortgage(
    mortgageAmount: number,
    mortgageTerm: number,
    interestRate: number,
  ): number {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;
    return (
      mortgageAmount *
      ((monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1))
    );
  }

  /**
   * Calculate the monthly payment amount for an interest-only mortgage
   * @param mortgageAmount - The total loan amount
   * @param interestRate - The annual interest rate in percentage
   * @returns The monthly payment amount
   */

  calculateMonthlyInterestOnlyMortgage(
    mortgageAmount: number,
    interestRate: number,
  ): number {
    const monthlyInterestRate = interestRate / 100 / 12;
    return mortgageAmount * monthlyInterestRate;
  }
}
