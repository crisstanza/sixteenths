function SixteenthsGenerator() {
}

SixteenthsGenerator.COUNT_1_MIN = 6;
SixteenthsGenerator.COUNT_1_MAX = 10;

SixteenthsGenerator.prototype.tab = function() {
	var binaryNumber = this.idealBinary();
	var binaryNumberPadded = this.padLeft(binaryNumber);
	return this.tabFormat(binaryNumberPadded);
};

SixteenthsGenerator.prototype.idealBinary = function() {
	var randomNumber = this.random();
	var binaryNumber = this.binary(randomNumber);
	var count = this.countOnes(binaryNumber);
	while (count < SixteenthsGenerator.COUNT_1_MIN || count > SixteenthsGenerator.COUNT_1_MAX) {
		randomNumber = this.random();
		binaryNumber = this.binary(randomNumber);
		count = this.countOnes(binaryNumber);
	}
	return binaryNumber;
};

SixteenthsGenerator.prototype.tabFormat = function(str) {
	str = str.replace(/0/g, '.');
	str = str.replace(/1/g, 'x');
	str = str.split('').join(' ');
	return str;
};

SixteenthsGenerator.prototype.random = function() {
	return Math.ceil(Math.random()*(65536-1) + 0);
};

SixteenthsGenerator.prototype.countOnes = function(n) {
	return (new String(n).match(/1/g)).length;
};

SixteenthsGenerator.prototype.binary = function(n) {
	return new Number(n).toString(2);
};

SixteenthsGenerator.prototype.padLeft = function(str) {
	return Array(16 - String(str).length + 1).join('0') + str;
};
