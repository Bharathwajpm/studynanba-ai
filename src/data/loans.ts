export interface LoanBank {
  name: string;
  interestRate: number;
  maxAmount: number;
  processingFee: string;
  repaymentYears: number;
  eligibility: string;
}

export const loanBanks: LoanBank[] = [
  { name: "State Bank of India", interestRate: 8.5, maxAmount: 2000000, processingFee: "Nil", repaymentYears: 15, eligibility: "Any recognized course" },
  { name: "Indian Bank", interestRate: 8.65, maxAmount: 1500000, processingFee: "₹1,000", repaymentYears: 12, eligibility: "UG/PG in recognized institution" },
  { name: "Bank of Baroda", interestRate: 8.7, maxAmount: 2000000, processingFee: "Nil", repaymentYears: 15, eligibility: "Merit-based admission" },
  { name: "Canara Bank", interestRate: 8.8, maxAmount: 1000000, processingFee: "₹500", repaymentYears: 10, eligibility: "Any recognized course" },
  { name: "Punjab National Bank", interestRate: 8.55, maxAmount: 1500000, processingFee: "Nil", repaymentYears: 15, eligibility: "UG/PG courses" },
  { name: "Central Bank of India", interestRate: 8.9, maxAmount: 1000000, processingFee: "₹750", repaymentYears: 12, eligibility: "Government recognized institutions" },
];

export function recommendLoans(input: { income: number; loanRequired: number; courseType: string }): (LoanBank & { matchScore: number })[] {
  return loanBanks
    .filter(b => b.maxAmount >= input.loanRequired)
    .map(b => {
      let score = 100;
      score -= (b.interestRate - 8.5) * 20;
      if (b.processingFee === "Nil") score += 5;
      score += (b.repaymentYears / 15) * 10;
      return { ...b, matchScore: Math.max(0, Math.min(100, Math.round(score))) };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}
