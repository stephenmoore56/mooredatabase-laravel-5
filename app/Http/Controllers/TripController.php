<?php
/**
 * RESTful methods for maintenance of trip data
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

use App\Http\Controllers\MyBaseController;
use Input, Redirect, DB, Validator;
use App\Trip, App\Location;

class TripController extends MyBaseController {

    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index() {
        $trips = DB::select('CALL proc_listTrips();');
        return view('admin/trips/list')->with('trips', $trips);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create() {
        $data = $this->getDataForDropdowns();
        return view('admin/trips/create')->with($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Redirect
     */
    public function store() {
        // input data
        $data = Input::except('_token');

        // validation rules
        $rules = $this->getValidationRules();

        // validate data using rules
        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            return Redirect::to('/admin/trips/create')->withErrors($validator);
        } else {
            try {
                $trip = new Trip();
                $trip->fill($data)->save();
                $flashMessage = 'Added trip on ' . $trip->trip_date . '.';
            } catch (Exception $e) {
                $flashMessage = $e->getMessage();
            }
            return Redirect::to('/admin/trips/' . $trip->id . '/sightings')->with('flashMessage', $flashMessage);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int    $id
     * @return View
     */
    public function edit($id) {
        $data = $this->getDataForDropdowns();
        $trip = Trip::find($id);
        return view('admin/trips/edit')->with($data)->with(['trip' => $trip]);
    }

    /**
     * Show the form for adding sightings.
     *
     * @param  int    $id
     * @return View
     */
    public function sightings($id) {
        // retrieve current sightings
        $sightings = DB::select('CALL proc_listSightingsForTrip(?);', [$id]);
        $trip      = Trip::find($id);
        $location  = Location::find($trip->location_id);
        return view('admin/trips/sightings')
            ->with(['sightings' => $sightings])
            ->with(['location' => $location])
            ->with(['trip' => $trip]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int        $id
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
            return Redirect::to('/admin/trips/' . $id . '/edit')
                ->withErrors($validator)
                ->withInput();

        } else {
            try {
                Trip::find($id)->fill($data)->save();
                $flashMessage = 'Updated trip.';
            } catch (Exception $e) {
                $flashMessage = $e->getMessage();
            }
            return Redirect::to('/admin/trips')->with('flashMessage', $flashMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int        $id
     * @return Redirect
     */
    public function destroy($id) {
        try {
            Trip::find($id)->delete();
            $flashMessage = 'Deleted trip.';
        } catch (Exception $e) {
            $flashMessage = $e->getMessage();
        }
        return Redirect::to('/admin/trips/')->with('flashMessage', $flashMessage);
    }

    /**
     * return validation rules for location
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
     */
    private function getDataForDropdowns() {
        $locations = DB::table('location')->orderBy('location_name', 'asc')->pluck('location_name', 'id');
        $data      = [
            'locations' => $locations,
        ];
        return $data;
    }

}
