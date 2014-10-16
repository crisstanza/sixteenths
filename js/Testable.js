function Testable () {
}

Testable.prototype.testValidRandom = function() {
	{
		var expected = 1;
	}
	{
		var generator = new SixteenthsGenerator();
		var current = generator.random();
	}
	{
		JSUS.assertEquals(expected, current);
	}
};
