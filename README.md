# Boilermaker
Boilerplate code and Style Guides for STAT development.

JavaScript modules and jQuery plugins follow our modified version of the WordPress JS standards. We lint these files with [JSCS](http://jscs.info/). (See `.jscsrc` in this repo, as well as [the WordPress JSCS config](https://github.com/jscs-dev/node-jscs/blob/master/presets/wordpress.json).) JavaScript code should also pass a basic [JSHint](http://jshint.com/) check. We also recommend using JavaScript's [strict mode](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/).

The jQuery plugin skeleton is based on [jQuery Boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate/blob/master/src/jquery.boilerplate.js). The JavaScript module skeleton uses the [revealing module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript) along with a `statGlobal` [namespace](https://addyosmani.com/blog/essential-js-namespacing).

PHP code follows the "WordPress Extra" standards and is linted with [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer). (See [the code standards themselves](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) and [the documentation for the standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/) for more fun reading).

Stylesheets follow our [Sass/CSS style Guide](sass.md). This guide is loosely based on [SMACSS](https://smacss.com/) and Mark Otto's article on [Nesting in Sass and Less](http://markdotto.com/2015/07/20/css-nesting/).

## TODO

### module.js and jquery-plugin.js

* Add CommonJS wrapper, and only use statGlobal if no module loader is available.
* Switch to ES6, and replace constant naming convention with the actual `const` keyword.
* Use [Pugin](https://github.com/statnews/pugin) to simplify the creation of jQuery plugins.
* Demonstrate use of singleton pattern in ES6.
