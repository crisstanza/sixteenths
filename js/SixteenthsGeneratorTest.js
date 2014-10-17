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

SixteenthsGeneratorTest.prototype.testIdealBinary = function() {
	{
		var expectedMinExc = 8;
		var expectedMaxExc = 12;
	}
	{
		var generator = new SixteenthsGenerator();
		var tmp = generator.idealBinary();
		var current = generator.countOnes(tmp);
	}
	{
		JSUS.assertBetween(expectedMinExc, expectedMaxExc, current);
	}
};
