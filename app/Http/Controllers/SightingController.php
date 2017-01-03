<?php
/**
 * RESTful methods for maintenance of sightings data
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * SightingsController class
 *
 */
class SightingController extends \BaseController {

    /**
     * Store a newly created resource in storage.
     * @access  public
     * @return Redirect
     */
    public function store() {

        // input data
        $data = Input::except('_token', 'search');

        // validation rules
        $rules = $this->getValidationRules();

        // validate data using rules
        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            if (!$data['aou_list_id']) {
                $flashMessage = 'No sighting selected.';
            }
            return Redirect::to('/admin/trips/' . $data['trip_id'] . '/sightings')->withErrors($validator);
        } else {
            try {
                $sighting = new Sighting();
                $sighting->fill($data)->save();
                $flashMessage = 'Added sighting.';
            } catch (Exception $e) {
                $errorMessage = $e->getMessage();
                // most likely error is duplicate sighting; UNIQUE constraint violation
                if (stripos($errorMessage, 'duplicate entry') > 0) {
                    $errorMessage = 'Duplicate sighting.';
                }
                $flashMessage = $errorMessage;
            }
            return Redirect::to('/admin/trips/' . $data['trip_id'] . '/sightings')
                ->with('flashMessage', $flashMessage);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @access  public
     * @param  $id        int
     * @return Redirect
     */
    public function destroy($id) {
        try {
            $sighting = Sighting::find($id);
            $trip_id  = $sighting->trip_id;
            $sighting->delete();
            $flashMessage = 'Removed sighting.';
        } catch (Exception $e) {
            $flashMessage = $e->getMessage();
        }
        return Redirect::to('/admin/trips/' . $trip_id . '/sightings')
            ->with('flashMessage', $flashMessage);
    }

    /**
     * return validation rules for location
     * @access  private
     * @return Array
     */
    private function getValidationRules() {
        return [
            'trip_id'     => 'required|integer|min:1',
            'aou_list_id' => 'required|integer|min:1',
        ];
    }

}
