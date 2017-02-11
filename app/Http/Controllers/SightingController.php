<?php
declare(strict_types = 1);
/**
 * Restful methods for maintenance of sightings data
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * SightingsController class
 *
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sighting as Sighting;

class SightingController extends MyBaseController {

	/**
	 * Store a newly created resource in storage.
	 * @access  public
	 * @param Request $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(Request $request) {

		// input data
		$data = $request->except('_token', 'search');

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$this->validate($request, $rules);

		try {
			$sighting = new Sighting();
			$sighting->fill($data)->save();
			$flashMessage = 'Added sighting.';
		} catch (\Exception $e) {
			$errorMessage = $e->getMessage();
			// most likely error is duplicate sighting; UNIQUE constraint violation
			if (stripos($errorMessage, 'duplicate entry') > 0) {
				$errorMessage = 'Duplicate sighting.';
			}
			$flashMessage = $errorMessage;
		}
		return back()->withInput()->with('flashMessage', $flashMessage);
	}

	/**
	 * Remove the specified resource from storage.
	 * @access  public
	 * @param int $id
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function destroy(int $id) {
		try {
			/** @noinspection PhpUndefinedMethodInspection */
			Sighting::find($id)->delete();
			$flashMessage = 'Removed sighting.';
		} catch (\Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return back()->withInput()->with('flashMessage', $flashMessage);
	}

	/**
	 * return validation rules for sighting
	 * @access  private
	 * @return array
	 */
	private function getValidationRules() {
		return [
			'trip_id'     => 'required|integer|min:1',
			'aou_list_id' => 'required|integer|min:1',
		];
	}

}
