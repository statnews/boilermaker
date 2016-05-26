// Vanilla JavaScript with revealing module pattern & namespace
//
// Further reading:
// https://addyosmani.com/blog/essential-js-namespacing/
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
//
// TODO: Add CommonJS or UMD Wrapper

window.statGlobal = window.statGlobal || {};

statGlobal.myModule = (function() {
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
