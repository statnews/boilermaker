/*
 * My Example Module
 * JavaScript module with revealing module pattern and namespace
 *
 * Developed by STAT | Licensed under the MIT license
 *
 * List any dependencies or requirements here.
 *
 */

// If statGlobal doesn't exist, create it.
window.statGlobal = window.statGlobal || {};

statGlobal.myExampleModule = (function( $ ) {
	'use strict';

	var privateVar = 'JavaScript is great!',
		PUBLIC_CONST = 'I\'m just a variable with a fancy name; please don\'t change me!',
		state = {
			color: 'red';
		};

	function init() {
		state.color = 'green';
	}

	$( document ).ready(function() {
		// Depending on what the module does, it could be initalized immediately,
		// on document ready, or on window load. It could also be initalized in the
		// delayedInit function in stat.js, which waits for the ads to be loaded.
		init();
	});

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
		// `$` near the top and `jQuery` at the bottom.
		$( 'article' ).addClass( 'cool' );
	}

	// Variables must be returned in an object (we're using `state`).
	// Constants and functions can be placed outside of the state object.
	// More info on why this is: http://stackoverflow.com/q/518000/925475
	return {
		statement: PUBLIC_CONST,
		addStuff: addStuff,
		addClass: addClass,
		state: state
	};
})( jQuery );
