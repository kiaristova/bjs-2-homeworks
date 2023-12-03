"use strict"

function getArrayParams(...arr) {
	let min, max, avg, count, sum;
	min = arr[0];
	max = arr[0];
	sum = 0;
	count = arr.length;

	for (let i = 0; i < count; i++) {
		max = (max > arr[i]) ? max : arr[i];
		min = (min < arr[i]) ? min : arr[i];
		sum += arr[i];
	}

	avg = +(sum / count).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length > 0) {
		let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return sum;
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length > 0) {
		let max = Math.max(...arr);
		let min = Math.min(...arr);
		let difference = max - min;
		return difference;
	} else {
		return 0;
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		let remainder = 0;
		for (let i = 0; i < arr.length; i++) {
			remainder = arr[i] % 2;
			if (remainder === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0;
		let countEvenElement = 0;
		let remainder = 0;
		for (let i = 0; i < arr.length; i++) {
			remainder = arr[i] % 2;
			if (remainder === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		return sumEvenElement / countEvenElement;
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(arrOfArr[0]);
	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[i]);
		maxWorkerResult = (maxWorkerResult > funcResult) ? maxWorkerResult : funcResult;
	}
	return maxWorkerResult;
}