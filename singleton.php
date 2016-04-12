<?php
/*
  STAT Singleton Boilerplate
	http://www.phptherightway.com/pages/Design-Patterns.html#singleton
*/

class StatSingletonBoilerplate {

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

StatSingletonBoilerplate::get_instance();
