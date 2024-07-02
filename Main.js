import { calculateSimpleInterest, calculateCompoundInterest } from './modules/interest.js';
import { calculateLoanPayment } from './modules/loan.js';
import { calculateInvestmentReturn } from './modules/investment.js';
import { calculateInterest, calculateRate, calculatePrincipal, calculateTime } from './modules/rate.js';

// Simple Interest Calculation
const calculateSimpleInterestButton = document.getElementById('calculateSimpleInterest');
calculateSimpleInterestButton.addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    const result = calculateSimpleInterest(principal, rate, time);
    document.getElementById('simpleInterestResult').textContent = `Simple Interest: ${result.toFixed(2)}`;
});

// Loan Payment Calculation
const calculateLoanPaymentButton = document.getElementById('calculateLoanPayment');
calculateLoanPaymentButton.addEventListener('click', () => {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    const result = calculateLoanPayment(loanAmount, annualRate, loanTerm);
    document.getElementById('loanPaymentResult').textContent = `Monthly Loan Payment: ${result.toFixed(2)}`;
});

// Investment Return Calculation
const calculateInvestmentReturnButton = document.getElementById('calculateInvestmentReturn');
calculateInvestmentReturnButton.addEventListener('click', () => {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualReturnRate = parseFloat(document.getElementById('annualReturnRate').value);
    const investmentYears = parseFloat(document.getElementById('investmentYears').value);

    const result = calculateInvestmentReturn(initialInvestment, annualReturnRate, investmentYears);
    document.getElementById('investmentReturnResult').textContent = `Future Value of Investment: ${result.toFixed(2)}`;
});
