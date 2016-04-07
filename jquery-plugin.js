/*
 * jQuery Plugin Skeleton v 1.0
 * A boilerplate for creating jQuery plugins.
 *
 * Briefly describe what the plugin does.
 *
 * Developed by STAT
 * Licensed under the MIT license
 * List any dependencies or requirements here.
 */

;(function( $, window, document, undefined ) {

	var pluginName = 'defaultPluginName',
		defaults = {
			propertyName: 'value'
		};

	function Plugin( element, options ) {
		this.element = element;
		this.$element = $( this.element );
		this.options = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {

		init: function() {
			// Store a reference to the plugin so that we can get at it easily later,
			// even if the scope of `this` changes.
			var plugin = this;
		},

		yourOtherFunction: function( el, options ) {
			var plugin = this;
		}
	};

	// Prevent multiple instantiations.
	$.fn[pluginName] = function( options ) {
		return this.each(function() {
			if ( ! $.data( this, 'plugin_' + pluginName ) ) {
				$.data( this, 'plugin_' + pluginName,
				new Plugin( this, options ) );
			}
		});
	};

})( jQuery, window, document );
