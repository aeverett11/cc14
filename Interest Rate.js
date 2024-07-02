// Function to calculate interest
export function calculateInterest(principal, rate, time) {
    return principal * rate * time;
}

// Function to calculate rate given interest, principal, and time
export function calculateRate(interest, principal, time) {
    return interest / (principal * time);
}

// Function to calculate principal given interest, rate, and time
export function calculatePrincipal(interest, rate, time) {
    return interest / (rate * time);
}

// Function to calculate time given interest, principal, and rate
export function calculateTime(interest, principal, rate) {
    return interest / (principal * rate);
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

console.log(`Loan Payment: ${calculateLoanPayment(loanAmount, annualRate, loanTerm)}`);

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
