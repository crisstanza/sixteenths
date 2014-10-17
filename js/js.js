(function() {

	function init() {
		var generator = new SixteenthsGenerator();
		var tab = generator.tab();
		var beat = document.getElementById('beat');
		beat.innerHTML = '| ' + tab + ' |';
	}

	window.addEventListener('load', init, false);

})();
