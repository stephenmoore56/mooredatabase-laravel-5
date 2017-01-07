<?php
/**
 * RESTful methods for maintenance of location data
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

use App\Http\Controllers\MyBaseController;
use Input, Redirect, DB, Validator;
use App\Trip, App\Location;

class LocationController extends MyBaseController {

	/**
	 * Display a listing of the resource.
	 * @access  public
	 * @return Response
	 */
	public function index() {
		$locations = DB::select('CALL proc_listLocations2();');
		return view('admin/locations/list')->with('locations', $locations);
	}

	/**
	 * Show the form for creating a new resource.
	 * @access  public
	 * @return Response
	 */
	public function create() {
		$data = $this->getDataForDropdowns();
		return view('admin/locations/create')->with($data);
	}

	/**
	 * Store a newly created resource
	 * @access  public
	 * @return Response
	 */
	public function store() {
		// input data
		$data = Input::except('_token');

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$validator = Validator::make($data, $rules);

		if ($validator->fails()) {
			return Redirect::to('/admin/locations/create')->withErrors($validator);
		} else {
			try {
				$location = new Location();
				$location->fill($data)->save();
				$flashMessage = 'Added location ' . $location->location_name . '.';
			} catch (Exception $e) {
				$flashMessage = $e->getMessage();
			}
			return Redirect::to('/admin/locations')->with('flashMessage', $flashMessage);
		}
	}

	/**
	 * Show the form for editing the specified resource.
	 * @access  public
	 * @param  int $id
	 * @return Response
	 */
	public function edit($id) {
		$data = $this->getDataForDropdowns();
		$location = Location::find($id);
		return view('admin/locations/edit')
			->with($data)
			->with(['location' => $location]);
	}

	/**
	 * Update the specified resource in storage.
	 * @access  public
	 * @param  int $id
	 * @return Redirect
	 */
	public function update($id) {
		// input data
		$data = Input::except('_token');

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$validator = Validator::make($data, $rules);

		if ($validator->fails()) {
			return Redirect::to('/admin/locations/' . $id . '/edit')
				->withErrors($validator)
				->withInput();
		} else {
			try {
				$location = Location::find($id);
				$location->fill($data)->save();
				$flashMessage = 'Updated location ' . $location->location_name . '.';
			} catch (Exception $e) {
				$flashMessage = $e->getMessage();
			}
			return Redirect::to('/admin/locations/')->with('flashMessage', $flashMessage);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 * @access  public
	 * @param  int $id
	 * @return Redirect
	 */
	public function destroy($id) {
		try {
			Location::find($id)->delete();
			$flashMessage = 'Deleted location.';
		} catch (Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return Redirect::to('/admin/locations/')->with('flashMessage', $flashMessage);
	}

	/**
	 * return validation rules for location
	 * @access  private
	 * @return Array
	 */
	private function getValidationRules() {
		return [
			'country_code' => 'required|in:US',
			'state_code' => 'required|in:MN',
			'county_name' => 'required|max:50',
			'ecs_subsection_id' => 'required|integer|min:1',
			'latitude' => 'required|numeric|between:-90,90',
			'longitude' => 'required|numeric|between:-180,180',
			'location_name' => 'required|min:10|max:50',
			'notes' => 'required',
		];
	}

	/**
	 * get data for form dropdowns
	 * @access  private
	 * @return Array
	 */
	private function getDataForDropdowns() {
		$countries = ['US' => 'US'];
		$states = ['MN' => 'MN'];
		$counties = DB::table('county')->orderBy('county_name', 'asc')->pluck('county_name', 'county_name');
		$ecs_subsections = DB::table('ecs_subsection')->orderBy('name', 'asc')->pluck('name', 'id');
		$data = [
			'countries' => $countries,
			'states' => $states,
			'counties' => $counties,
			'ecs_subsections' => $ecs_subsections,
		];
		return $data;
	}
}
