<?php
/**
 * Restful methods for maintenance of trip data
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * TripController class
 *
 */
namespace App\Http\Controllers;

use App\Http\Mappers\TripMapper as TripMapper;
use App\Http\Mappers\LocationMapper as LocationMapper;
use Illuminate\Http\Request;
use App\Trip, App\Location;

class TripController extends MyBaseController {

    /**
     * Display a listing of the resource.
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function index() {
        $trips = TripMapper::listTrips();
        return view('admin/trips/list')->with('trips', $trips);
    }

    /**
     * Show the form for creating a new resource.
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function create() {
        $data = $this->getDataForDropdowns();
        return view('admin/trips/create')->with($data);
    }

    /**
     * Store a newly created resource in storage.
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

        // save
		try {
			$trip = new Trip();
			$trip->fill($data)->save();
			/** @noinspection PhpUndefinedFieldInspection */
			$flashMessage = 'Added trip on ' . $trip->trip_date . '.';
		} catch (\Exception $e) {
			$flashMessage = $e->getMessage();
		}
		/** @noinspection PhpUndefinedFieldInspection */
		return redirect('/admin/trips/' . $trip->id . '/sightings')->with('flashMessage', $flashMessage);
    }

    /**
     * Show the form for editing the specified resource.
	 * @param int $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function edit(int $id) {
        $data = $this->getDataForDropdowns();
		/** @noinspection PhpUndefinedMethodInspection */
		$trip = Trip::find($id);
        return view('admin/trips/edit')->with($data)->with(['trip' => $trip]);
    }

    /**
     * Show the form for adding sightings.
	 * @param int $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    public function sightings(int $id) {
        // retrieve current sightings
        $sightings = TripMapper::listSightingsForTrip($id);
		/** @noinspection PhpUndefinedMethodInspection */
		$trip      = Trip::find($id);
		/** @noinspection PhpUndefinedMethodInspection */
		$location  = Location::find($trip->location_id);
        return view('admin/trips/sightings')
            ->with(['sightings' => $sightings])
            ->with(['location' => $location])
            ->with(['trip' => $trip]);
    }

    /**
     * Update the specified resource in storage.
     *
	 * @param Request $request
	 * @param int $id
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
			Trip::find($id)->fill($data)->save();
			$flashMessage = 'Updated trip.';
		} catch (\Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return redirect('/admin/trips')->with('flashMessage', $flashMessage);

    }

    /**
     * Remove the specified resource from storage.
	 * @param int $id
	 * @return \Illuminate\Http\RedirectResponse
	 */
    public function destroy(int $id) {
        try {
			/** @noinspection PhpUndefinedMethodInspection */
			Trip::find($id)->delete();
            $flashMessage = 'Deleted trip.';
        } catch (\Exception $e) {
            $flashMessage = $e->getMessage();
        }
        return redirect('/admin/trips/')->with('flashMessage', $flashMessage);
    }

    /**
     * return validation rules for location
	 * @return array
	 */
    private function getValidationRules() {
        return [
            'location_id' => 'required|integer|min:1',
            'trip_date'   => 'required|date|date_format:Y-m-d',
            'notes'       => 'required',
        ];
    }

    /**
     * get data for form dropdowns
	 * @return array
	 */
    private function getDataForDropdowns() {
        $locations = LocationMapper::listLocationsDropdown();
        $data      = [
            'locations' => $locations,
        ];
        return $data;
    }

}
