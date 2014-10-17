(function() {

	function SixteenthsGeneratorTest() {
	}

	SixteenthsGeneratorTest.prototype.testValidRandom = function() {
		{
			var expectedMinExc = 0;
			var expectedMaxExc = 65536;
		}
		{
			var generator = new SixteenthsGenerator();
			var current = generator.random();
		}
		{
			JSUS.assertBetween(expectedMinExc, expectedMaxExc, current);
		}
	};

	SixteenthsGeneratorTest.prototype.testBinary_1 = function() {
		{
			var expected = '1';
			var currentDecimal = 1;
		}
		{
			var generator = new SixteenthsGenerator();
			var current = generator.binary(currentDecimal);
		}
		{
			JSUS.assertEquals(expected, current);
		}
	};

	SixteenthsGeneratorTest.prototype.testBinary_2 = function() {
		{
			var expected = '10';
			var currentDecimal = 2;
		}
		{
			var generator = new SixteenthsGenerator();
			var current = generator.binary(currentDecimal);
		}
		{
			JSUS.assertEquals(expected, current);
		}
	};

	SixteenthsGeneratorTest.prototype.testPadLeft = function() {
		{
			var expected = '0000000000000001';
			var currentDecimal = 1;
		}
		{
			var generator = new SixteenthsGenerator();
			var tmp = generator.binary(currentDecimal);
			var current = generator.padLeft(tmp);
		}
		{
			JSUS.assertEquals(expected, current);
		}
	};

	SixteenthsGeneratorTest.prototype.testTabFormat = function() {
		{
			var expected = '. . . . . . . . . . . . . . . x';
			var currentDecimal = 1;
		}
		{
			var generator = new SixteenthsGenerator();
			var currentBinary = generator.binary(currentDecimal);
			var currentBinaryPadded = generator.padLeft(currentBinary);
			var current = generator.tabFormat(currentBinaryPadded);
		}
		{
			JSUS.assertEquals(expected, current);
		}
	};

	SixteenthsGeneratorTest.prototype.testIdealBinary = function() {
		{
			var expectedMin = 6 - 1;
			var expectedMax = 10 + 1;
		}
		{
			var generator = new SixteenthsGenerator();
			var tmp = generator.idealBinary();
			var current = generator.countOnes(tmp);
		}
		{
			JSUS.assertBetween(expectedMin, expectedMax, current);
		}
	};

	function init() {
		var jsus = new JSUS(SixteenthsGeneratorTest);
		jsus.start();
		jsus.end();
	}

	window.addEventListener('load', init, false);

})();
