<?php
declare(strict_types = 1);
/**
 * Trip mapper
 *
 * @package  Mappers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * TripMapper class
 *
 */
namespace App\Http\Mappers;

use \Illuminate\Support\Facades\DB;

class TripMapper {

	/**
	 * list trips
	 * @access  public
	 * @return array
	 */
	public static function listTrips() {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::select('CALL proc_listTrips();');
	}

	/**
	 * List sightings for a trip
	 * @param int $id
	 * @return array
	 */
	public static function listSightingsForTrip(int $id) {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::select('CALL proc_listSightingsForTrip(?);', [$id]);
	}

}
