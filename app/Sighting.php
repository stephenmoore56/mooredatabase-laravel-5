<?php
/**
 * Eloquent model for Sighting
 *
 * @package  Models
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * Sighting class
 *
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Sighting extends Model {

	/**
	 * Map to sighting table
	 *
	 * @var string
	 */
	protected $table = 'sighting';
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
	protected $fillable = [
		'trip_id',
		'aou_list_id'];

}