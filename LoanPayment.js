// Function to calculate monthly loan payment (amortizing loan)
export function calculateLoanPayment(loanAmount, annualRate, loanTerm) {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;
    const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
    return numerator / denominator;
}
import { calculateSimpleInterest, calculateCompoundInterest } from './modules/interest.js';
import { calculateLoanPayment } from './modules/loan.js';
import { calculateInvestmentReturn } from './modules/investment.js';
import { calculateInterest, calculateRate, calculatePrincipal, calculateTime } from './modules/rate.js';

// Example calculations
const principal = 1000;
const rate = 5;
const time = 2;
const n = 4; // Compounded quarterly

console.log(`Simple Interest: ${calculateSimpleInterest(principal, rate, time)}`);
console.log(`Compound Interest: ${calculateCompoundInterest(principal, rate, time, n)}`);

const loanAmount = 20000;
const annualRate = 5;
const loanTerm = 5;

// Calculate and log the monthly loan payment
const monthlyPayment = calculateLoanPayment(loanAmount, annualRate, loanTerm);
console.log(`Monthly Loan Payment: ${monthlyPayment.toFixed(2)}`);

const initialInvestment = 5000;
const annualReturnRate = 7;
const years = 10;

console.log(`Investment Return: ${calculateInvestmentReturn(initialInvestment, annualReturnRate, years)}`);

// Using the new rate module
const interest = calculateInterest(principal, rate / 100, time);
console.log(`Interest: ${interest}`);

const calculatedRate = calculateRate(interest, principal, time);
console.log(`Rate: ${calculatedRate * 100}%`);

const calculatedPrincipal = calculatePrincipal(interest, rate / 100, time);
console.log(`Principal: ${calculatedPrincipal}`);

const calculatedTime = calculateTime(interest, principal, rate / 100);
console.log(`Time: ${calculatedTime} years`);
