<?php

/**
 * Eloquent model for Location
 *
 * @package  Models
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * Location class
 *
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model {

	/**
	 * Map to table location
	 *
	 * @var string
	 */
	protected $table = 'location';
	/**
	 * Table does not have timestamp columns
	 *
	 * @var mixed
	 */
	public $timestamps = false;
	/**
	 * Columns that can be filled using fill() method
	 *
	 * @var array
	 */
	protected $fillable = [
		'country_code',
		'state_code',
		'county_name',
		'ecs_subsection_id',
		'latitude',
		'longitude',
		'location_name',
		'notes'];
	/**
	 * Columns that cannot be filled using fill() method
	 *
	 * @var array
	 */
	protected $guarded = ['id'];
}