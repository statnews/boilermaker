<?php
/*
  Plugin Name: STAT Boilerplate
  Description: Boilerplate WordPress plugin. Rename me and build something awesome with me!
  Version:     1.0.0
  Author:      STAT
  Author URI:  https://www.statnews.com/
  License:     GPL2
  License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

class StatBoilerplate {

	private static $instance;

	public static function get_instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	protected function __construct() {
		// Add WP hooks and calls to methods to be initialized
	}

	private function __clone() {

	}

	private function __wakeup() {

	}

	public function public_method_name() {
		// Method that can be used outside the class.
	}

	protected function private_method_name() {
		// Method that can be only used within the class.
	}
}

StatBoilerplate::get_instance();
