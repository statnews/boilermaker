/*
 * My Example Module
 * Vanilla JavaScript module with revealing module pattern and namespace
 *
 * Developed by STAT
 * Licensed under the MIT license
 *
 * List any dependencies or requirements here.
 *
 * TODO: add CommonJS wrapper, and only use statGlobal if no module loader is
 * available.
 */

window.statGlobal = window.statGlobal || {};

statGlobal.myExampleModule = (function() {
	var publicVar = 'JavaScript is great!',
		privateVar = 'But so is PHP.';

	// Example of a public function
	function addStuff( number ) {
		return number + 42;
	}

	// Example of a private function
	function subtractStuff( number ) {
		return number - 42;
	}

	return {
		statement: publicVar,
		addStuff: addStuff
	};
})();
