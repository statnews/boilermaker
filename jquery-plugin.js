/*!
 * jQuery lightweight plugin boilerplate
 * Modified to follow STAT/WordPress coding standards
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Code style tweaks: @ryandebeasi
 * Licensed under the MIT license
 * https://github.com/statnews/boilermaker
 * Original with annotations: https://git.io/vVrBG
 */

;(function( $, window, document, undefined ) {

	// Create the defaults once
	var pluginName = 'defaultPluginName',
		defaults = {
			propertyName: 'value'
		};

	// The actual plugin constructor
	function Plugin( element, options ) {
		this.element = element;
		this.options = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {

		init: function() {

		},

		yourOtherFunction: function( el, options ) {

		}
	};

	$.fn[pluginName] = function( options ) {
		return this.each(function() {
			if ( ! $.data( this, 'plugin_' + pluginName ) ) {
				$.data( this, 'plugin_' + pluginName,
				new Plugin( this, options ) );
			}
		});
	};

})( jQuery, window, document );
