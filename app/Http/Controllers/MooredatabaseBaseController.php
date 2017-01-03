<?php
/**
 * Base controller class for Laravel framework
 *
 * @package  Controllers
 */

/**
 * BaseController class
 *
 */
use App\Http\Controllers\Controller;

class MooredatabaseBaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout() {
		if (!is_null($this->layout)) {
			$this->layout = View::make($this->layout);
		}
	}

}
