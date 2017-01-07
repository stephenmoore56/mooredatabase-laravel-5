<?php

/**
 * Eloquent model for Trip
 *
 * @package  Models
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * Trip class
 *
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model {

	/**
	 * Map to trip table
	 *
	 * @var string
	 */
	protected $table = 'trip';
	/**
	 * Table has no timestamp columns
	 *
	 * @var mixed
	 */
	public $timestamps = false;
	/**
	 * Columns fillable using fill() method
	 *
	 * @var array
	 */
	public $fillable = ['location_id', 'trip_date', 'notes'];
	/**
	 * Columns not fillable using fill()
	 *
	 * @var array
	 */
	public $guarded = ['id'];

	/**
	 * method to relate birds and trips
	 *
	 * @access  public
	 * @return mixed
	 */
	public function birds() {
		return $this->belongsToMany('Bird', 'sighting', 'trip_id', 'aou_list_id');
	}

}