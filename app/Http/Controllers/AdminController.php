<?php
/**
 * Admin login/logout/authentication methods
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * AdminController class
 *
 */
namespace App\Http\Controllers;

use App\Http\Controllers\MyBaseController;
use Input, Validator, Redirect, Auth, Hash, Cache; // facades; see app.php

class AdminController extends MyBaseController {

	/**
	 * Show login form
	 * @access public
	 * @return View
	 */
	public function login() {
		return view('admin.login');
	}

	/**
	 * Check login credentials
	 * @access public
	 * @return Redirect
	 */
	public function authenticate() {
		// get data
		$credentials = Input::only('username', 'password');

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$validator = Validator::make($credentials, $rules);

		if ($validator->fails()) {
			return Redirect::to('login')->with('flashMessage', 'Invalid username or password.');
		} else {
			try {
				if (Auth::attempt($credentials)) {
					return Redirect::intended('/admin/menu');
				} else {
					return Redirect::to('login')->with('flashMessage', 'Invalid username or password.');
				}
			} catch (Exception $e) {
				$flashMessage = 'An error occurred.';
			}
			return Redirect::to('login')->with('flashMessage', $flashMessage);
		}
	}

	/**
	 * Show logout page
	 * @access  public
	 * @return View
	 */
	public function logout() {
		return view('admin.logout');
	}

	/**
	 * Un-authenticate; ends session
	 * @access public
	 * @return Redirect
	 */
	public function unauthenticate() {
		Auth::logout();
		return Redirect::to('logout')->with('flashMessage', "You've been logged out!");
	}

	/**
	 * Show admin menu
	 * @access public
	 * @return View
	 */
	public function menu() {
		return view('admin.menu');
	}

	/**
	 * Clear cache
	 * @access public
	 * @return Redirect
	 */
	public function clearCache() {
		Cache::flush();
		return Redirect::to('/admin/menu')->with('flashMessage', 'Cache cleared!');
	}

	/**
	 * return validation rules for authentication
	 * @access  private
	 * @return Array
	 */
	private function getValidationRules() {
		return [
			'username' => 'required|alphanum|max:50',
			'password' => 'required|alphanum|max:50',
		];
	}

}
