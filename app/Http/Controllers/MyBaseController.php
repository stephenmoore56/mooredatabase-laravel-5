<?php
/**
 * Base controller class for Laravel framework
 *
 * @package  Controllers
 */

/**
 * MyBaseController class
 *
 */
namespace App\Http\Controllers;

class MyBaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout() {
		if (!is_null($this->layout)) {
			$this->layout = view($this->layout);
		}
	}

}
