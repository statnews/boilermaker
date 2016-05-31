/*
 * My Example Module
 * JavaScript module with revealing module pattern and namespace
 *
 * Developed by STAT
 * Licensed under the MIT license
 *
 * List any dependencies or requirements here.
 *
 * TODO: add CommonJS wrapper, and only use statGlobal if no module loader is
 * available.
 */

// If statGlobal doesn't exist, create it.
window.statGlobal = window.statGlobal || {};

statGlobal.myExampleModule = (function( $ ) {
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

	// Example of a public function that uses jQuery
	function addClass() {
		// We have a local $ variable that we can use even when jQuery is running in
		// no-conflict mode. If jQuery isn't required by this module, just remove
		// `$` on line 16 and `jQuery` on line 41.
		$( 'article' ).addClass( 'cool' );
	}

	return {
		statement: publicVar,
		addStuff: addStuff,
		addClass: addClass
	};
})( jQuery );
