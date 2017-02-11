<?php
declare(strict_types = 1);
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

use App\Http\Mappers\ReportsMapper as Mapper;
use Illuminate\Http\Request;
use Exception;

class ReportsController extends MyBaseController {

	/**
	 * Clear memcached
	 * @access  public
	 * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
	 */
	public function clearCache() {
		Mapper::clearCache();
		return redirect('/');
	}

	/**
	 * Species By Month report
	 * @access  public
	 * @return \Illuminate\View\View
	 */
	public function speciesByMonth() {
		return view('reports.speciesByMonth');
	}

	/**
	 * Species By Year report
	 * @access  public
	 * @return \Illuminate\View\View
	 */
	public function speciesByYear() {
		return view('reports.speciesByYear');
	}

	/**
	 * Species By Order report
	 * @access  public
	 * @return \Illuminate\View\View
	 */
	public function speciesByOrder() {
		return view('reports.speciesByOrder');
	}

	/**
	 * Species for Month report
	 * @access  public
	 * @param  int $monthNumber
	 * @return \Illuminate\View\View
	 */
	public function speciesForMonth(int $monthNumber) {
		return view('reports.speciesForMonth')->with('monthNumber', $monthNumber);
	}

	/**
	 * Species for Year report
	 * @access  public
	 * @param  int $year
	 * @return \Illuminate\View\View
	 */
	public function speciesForYear(int $year) {
		return view('reports.speciesForYear')->with('year', $year);
	}

	/**
	 * Species Detail report
	 * @access  public
	 * @param  int $speciesId
	 * @return \Illuminate\View\View
	 */
	public function speciesDetail(int $speciesId) {
		return view('reports.speciesDetail')->with('speciesId', $speciesId);
	}

	/**
	 * Species for Order report
	 * @access  public
	 * @param  int $orderId
	 * @return \Illuminate\View\View
	 */
	public function speciesForOrder(int $orderId) {
		return view('reports.speciesForOrder')->with('orderId', $orderId);
	}

	/**
	 * All Species report
	 * @access  public
	 * @return \Illuminate\View\View
	 */
	public function speciesAll() {
		return view('reports.speciesAll');
	}

	/**
	 * search all report
	 * @access  public
	 * @return \Illuminate\View\View
	 */
	public function searchAll() {
		return view('reports.searchAll');
	}

	/**
	 * Species By Location report
	 * @access  public
	 * @return \Illuminate\View\View
	 */
	public function speciesByLocation() {
		return view('reports.speciesByLocation');
	}

	/**
	 * Species for Location report
	 * @access  public
	 * @param  int $locationId
	 * @return \Illuminate\View\View
	 */
	public function speciesForLocation(int $locationId) {
		return view('reports.speciesForLocation')->with('locationId', $locationId);
	}

	/**
	 * lookup birds; for sightings
	 * @access  public
	 * @param Request $request
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function birdLookup(Request $request) {
		try {
			$query = $request->input('query');
			$results = Mapper::birdLookup($query);
			return response()->json($results, 200, [], JSON_NUMERIC_CHECK);
		} catch (Exception $e) {
			return response()->json([['errors' => $e->getMessage()]], 500, []);
		}
	}
}
