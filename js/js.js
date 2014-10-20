(function() {

	function init() {
		var generator = new SixteenthsGenerator();
		var tab = generator.tab();
		var emptyTab = generator.emptyTab();
		draw('beat-1', emptyTab);
		draw('beat-2', emptyTab);
		draw('beat-3', emptyTab);
		draw('beat-4', tab);
	}

	function draw(id, tab) {
		var beat = document.getElementById(id);
		beat.innerHTML = '| ' + tab + ' |';
	}

	window.addEventListener('load', init, false);

})();
