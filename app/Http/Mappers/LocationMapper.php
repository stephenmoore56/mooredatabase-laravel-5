<?php
declare(strict_types=1);
/**
 * Reports methods that query or clear cache
 *
 * @package  Mappers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * ReportsMapper class
 *
 */
namespace App\Http\Mappers;

use \Illuminate\Support\Facades\DB;

class LocationMapper {

	/**
	 * location list for dropdowns
	 * @access  public
	 * @return array
	 */
	public static function listLocationsDropdown() {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::table('location')->orderBy('location_name', 'asc')->pluck('location_name', 'id');
	}

	/**
	 * List locations
	 * @return array
	 */
	public static function listLocations() {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::select('CALL proc_listLocations2();');
	}

	/**
	 * List counties
	 * @return mixed
	 */
	public static function listCounties() {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::table('county')->orderBy('county_name', 'asc')->pluck('county_name', 'county_name');
	}

	/**
	 * List ECS subsections
	 * @return mixed
	 */
	public static function listECSSubsections() {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::table('ecs_subsection')->orderBy('name', 'asc')->pluck('name', 'id');
	}

}
