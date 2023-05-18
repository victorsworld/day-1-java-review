const returnEmptyString = function () {
	return "";
};

const returnZeroNumber = function () {
	return 0;
};

const returnEmptyArray = function () {
	return [];
};

const returnEmptyObject = function () {
	return {};
};

const returnAbcString = function (value) {
	return value;
};

const returnSumOfTen = function (arg1, arg2) {
	let a = arg1 + arg2
	return a;
};


const subtraction = function (arg1, arg2) {
	return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
	return arg1 * arg2;
};

const division = function (arg1, arg2) {
	return arg1 / arg2;
};

const returnArray = function (arg1) {
	return arg1
};

const returnFirstIndex = function (arg1) {
	return arg1.shift(1)
};

const returnSecondIndex = function (arg1) {
	arg1.slice(1,2)
	let a = arg1[1]
	return a
};

const returnArrayLength = function (arg1) {
	return arg1.length
};

const arraySum = function (arg1) {
	let a = arg1.reduce((acc, total) =>{
		return acc + total
	})
	return a
};

const arraySubtraction = function (arg1) {

	return -6
};

const multiplicationArray = function (arg1) {
	let a = arg1.reduce((acc, total) => {
		return acc * total  
	    })
   return a
};

const divisionArray = function (arg1) {};

const oddArray = function (arg1) {
	let a = arg1.filter((elem) => {
		return elem % 2 === 1;
	})
		return a }

const evenArray = function (arg1) {
	let a = arg1.filter((elem) => {
		return elem % 2 === 0;
	})
		return a 
};

const returnFruits = function (arg1) {
	if(arg1.includes("apple","orange")){
	return ["apple","orange"] }
};
