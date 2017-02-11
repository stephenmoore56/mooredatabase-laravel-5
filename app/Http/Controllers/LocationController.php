<?php

declare(strict_types = 1);
/**
 * Restful methods for maintenance of location data
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * LocationController class
 *
 */
namespace App\Http\Controllers;

use App\Http\Mappers\LocationMapper as LocationMapper;
use Illuminate\Http\Request;
use App\Location;

class LocationController extends MyBaseController {

	/**
	 * Display a listing of the resource.
	 * @access  public
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function index() {
		$locations = LocationMapper::listLocations();
		return view('admin/locations/list')->with('locations', $locations);
	}

	/**
	 * Show the form for creating a new resource.
	 * @access  public
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function create() {
		$data = $this->getDataForDropdowns();
		return view('admin/locations/create')->with($data);
	}

	/**
	 * Store a newly created resource
	 * @access  public
	 * @param Request $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(Request $request) {

		// input data
		$data = $request->except('_token');

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$this->validate($request, $rules);

		try {
			$location = new Location();
			$location->fill($data)->save();
			/** @noinspection PhpUndefinedFieldInspection */
			$flashMessage = 'Added location ' . $location->location_name . '.';
		} catch (\Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return redirect('/admin/locations')->with('flashMessage', $flashMessage);
	}

	/**
	 * Show the form for editing the specified resource.
	 * @access  public
	 * @param  int $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function edit(int $id) {
		$data = $this->getDataForDropdowns();
		/** @noinspection PhpUndefinedMethodInspection */
		$location = Location::find($id);
		return view('admin/locations/edit')
			->with($data)
			->with(['location' => $location]);
	}

	/**
	 * Update the specified resource in storage.
	 * @access  public
	 * @param Request $request
	 * @param int     $id
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function update(Request $request, int $id) {

		// input data
		$data = $request->except('_token');

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$this->validate($request, $rules);

		try {
			/** @noinspection PhpUndefinedMethodInspection */
			$location = Location::find($id);
			/** @noinspection PhpUndefinedMethodInspection */
			$location->fill($data)->save();
			$flashMessage = 'Updated location ' . $location->location_name . '.';
		} catch (\Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return redirect('/admin/locations/')->with('flashMessage', $flashMessage);

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
			Location::find($id)->delete();
			$flashMessage = 'Deleted location.';
		} catch (\Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return redirect('/admin/locations/')->with('flashMessage', $flashMessage);
	}

	/**
	 * return validation rules for location
	 * @access  private
	 * @return array
	 */
	private function getValidationRules() {
		return [
			'country_code'      => 'required|in:US',
			'state_code'        => 'required|in:MN',
			'county_name'       => 'required|max:50',
			'ecs_subsection_id' => 'required|integer|min:1',
			'latitude'          => 'required|numeric|between:-90,90',
			'longitude'         => 'required|numeric|between:-180,180',
			'location_name'     => 'required|min:10|max:50',
			'notes'             => 'required',
		];
	}

	/**
	 * get data for form dropdowns
	 * @access  private
	 * @return array
	 */
	private function getDataForDropdowns() {
		$countries = ['US' => 'US'];
		$states = ['MN' => 'MN'];
		$counties = LocationMapper::listCounties();
		$ecs_subsections = LocationMapper::listECSSubsections();
		$data = [
			'countries'       => $countries,
			'states'          => $states,
			'counties'        => $counties,
			'ecs_subsections' => $ecs_subsections,
		];
		return $data;
	}
}
