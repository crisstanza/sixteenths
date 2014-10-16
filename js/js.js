(function() {

	function init() {
		var jsus = new JSUS(SixteenthsGeneratorTest);
		jsus.start();
		jsus.end();
	}

	window.addEventListener('load', init, false);

})();
