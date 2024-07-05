export interface Mortgage {
  monthlyPayment: number;
  interestPayment: number;
  principalAmount: number;
  interestRate: number;
  numberOfPayments: number;
  mortgageType: string | null;
}

export enum mortgageType {
  REPAYMENT = 'REPAYMENT',
  INTEREST_ONLY = 'INTEREST_ONLY',
}
