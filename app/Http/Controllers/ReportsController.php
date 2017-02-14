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
