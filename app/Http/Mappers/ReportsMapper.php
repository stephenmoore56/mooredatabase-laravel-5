<?php
declare(strict_types = 1);
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

use \Illuminate\Support\Facades\Cache;
use \Illuminate\Support\Facades\DB;

class ReportsMapper {

	/**
	 * Clear memcached
	 * @access  public
	 */
	public static function clearCache() {
		/** @noinspection PhpUndefinedMethodInspection */
		Cache::flush();
	}

	/**
	 * lookup birds; for sightings
	 * @access  public
	 * @param string $query
	 * @return array
	 */
	public static function birdLookup(string $query) {
		/** @noinspection PhpUndefinedMethodInspection */
		return DB::connection('mysql_readonly')->select('CALL proc_birdLookup(?);', [$query]);
	}
}
