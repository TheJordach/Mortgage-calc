export interface Mortgage {
  monthlyPayment: number;
  principalAmount: number;
  interestRate: number;
  numberOfPayments: number;
  mortgageType: MortgageType;
}

export enum MortgageType {
  REPAYMENT = 'Repayment',
  INTEREST_ONLY = 'Interest Only',
}
