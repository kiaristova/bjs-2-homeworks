"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant;
	discriminant = (b ** 2) - (4 * a * c);
	if (discriminant > 0) {
		let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	} else if (discriminant === 0) {
		arr[0] = -b / (2 * a);
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentFormat = percent / 100;
	let percentMonths = percentFormat / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (percentMonths + (percentMonths / (((1 + percentMonths) ** countMonths) - 1)));
	let totalLoanAmount = monthlyPayment * countMonths;
	let totalLoanAmountRound = +totalLoanAmount.toFixed(2);
	return totalLoanAmountRound;
}