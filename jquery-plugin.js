/*
 * STAT jQuery Plugin Skeleton
 * A boilerplate for creating jQuery plugins.
 * Based on https://jqueryboilerplate.com/ and adapted for WordPress JS
 * standards and our own common use cases.
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

		yourPublicFunction: function() {
			var plugin = this;
		},

		_yourPrivateFunction: function() {
			// The underscore indicates that this function is private. This is a
			// convention only: other code technically can access this function.
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
