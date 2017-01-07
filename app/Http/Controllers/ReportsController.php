<?php
/**
 * Reports methods that serve up templates/views
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * ReportsController class
 *
 */
namespace App\Http\Controllers;

use App\Http\Controllers\MyBaseController;
use Input, DB, Response, Redirect, Cache;

class ReportsController extends MyBaseController {

	/**
	 * Clear memcached
	 * @access  public
	 * @return Redirect
	 */
	public function clearCache() {
		Cache::flush();
		return Redirect::to('/');
	}

	/**
	 * Species By Month report
	 * @access  public
	 * @return View
	 */
	public function speciesByMonth() {
		return view('reports.speciesByMonth');
	}

	/**
	 * Species By Year report
	 * @access  public
	 * @return View
	 */
	public function speciesByYear() {
		return view('reports.speciesByYear');
	}

	/**
	 * Species By Order report
	 * @access  public
	 * @return View
	 */
	public function speciesByOrder() {
		return view('reports.speciesByOrder');
	}

	/**
	 * Species for Month report
	 * @access  public
	 * @param  int $monthNumber
	 * @return View
	 */
	public function speciesForMonth($monthNumber) {
		return view('reports.speciesForMonth')->with('monthNumber', $monthNumber);
	}

	/**
	 * Species for Year report
	 * @access  public
	 * @param  int $year
	 * @return View
	 */
	public function speciesForYear($year) {
		return view('reports.speciesForYear')->with('year', $year);
	}

	/**
	 * Species Detail report
	 * @access  public
	 * @param  int $speciesId
	 * @return View
	 */
	public function speciesDetail($speciesId) {
		return view('reports.speciesDetail')->with('speciesId', $speciesId);
	}

	/**
	 * Species for Order report
	 * @access  public
	 * @param  int $orderId
	 * @return View
	 */
	public function speciesForOrder($orderId) {
		return view('reports.speciesForOrder')->with('orderId', $orderId);
	}

	/**
	 * All Species report
	 * @access  public
	 * @return View
	 */
	public function speciesAll() {
		return view('reports.speciesAll');
	}

	/**
	 * search all report
	 * @access  public
	 * @return View
	 */
	public function searchAll() {
		return view('reports.searchAll');
	}

	/**
	 * Species By Location report
	 * @access  public
	 * @return View
	 */
	public function speciesByLocation() {
		return view('reports.speciesByLocation');
	}

	/**
	 * Species for Location report
	 * @access  public
	 * @param  int $locationId
	 * @return View
	 */
	public function speciesForLocation($locationId) {
		return view('reports.speciesForLocation')->with('locationId', $locationId);
	}

	/**
	 * lookup birds; for sightings
	 * @access  public
	 * @return Response
	 */
	public function birdLookup() {
		try {
			$query = Input::get('query');
			$results = DB::select('CALL proc_birdLookup(?);', [$query]);
			return Response::json($results, 200, [], JSON_NUMERIC_CHECK);
		} catch (Exception $e) {
			return Response::json([['errors' => $e->getMessage()]], 500, []);
		}
	}
}
