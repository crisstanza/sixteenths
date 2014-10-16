function SixteenthsGenerator() {
}

SixteenthsGenerator.prototype.random = function() {
  return Math.ceil(Math.random()*(65536-1) + 0);
};

SixteenthsGenerator.prototype.binary = function(n) {
	return new Number(n).toString(2);
};

SixteenthsGenerator.prototype.padLeft = function(str) {
	return Array(16 - String(str).length + 1).join('0') + str;
};
