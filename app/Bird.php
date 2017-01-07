<?php

/**
 * Eloquent model for Bird
 *
 * @package  Models
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * Bird class
 *
 */
class Bird extends Eloquent {

	/**
	 * Map to aou_list table
	 *
	 * @var string
	 */
	protected $table = 'aou_list';
	/**
	 * Table does not have timestamp columns
	 *
	 * @var mixed
	 */
	public $timestamps = false;

}