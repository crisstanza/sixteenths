function SixteenthsGenerator() {
}

SixteenthsGenerator.COUNT_1_MIN_EXC = 8;
SixteenthsGenerator.COUNT_1_MAX_EXC = 12;

SixteenthsGenerator.prototype.idealBinary = function() {
	var randomNumber = this.random();
	var binaryNumber = this.binary(randomNumber);
	var count = this.countOnes(binaryNumber);
	while (count <= SixteenthsGenerator.COUNT_1_MIN_EXC || count >= SixteenthsGenerator.COUNT_1_MAX_EXC) {
		randomNumber = this.random();
		binaryNumber = this.binary(randomNumber);
		count = this.countOnes(binaryNumber);
	}
	return binaryNumber;
};

SixteenthsGenerator.prototype.random = function() {
	return Math.ceil(Math.random()*(65536-1) + 0);
};

SixteenthsGenerator.prototype.countOnes = function(n) {
	return n.match(/1/g).length;
};

SixteenthsGenerator.prototype.binary = function(n) {
	return new Number(n).toString(2);
};

SixteenthsGenerator.prototype.padLeft = function(str) {
	return Array(16 - String(str).length + 1).join('0') + str;
};
