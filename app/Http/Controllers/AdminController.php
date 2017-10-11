<?php

declare(strict_types=1);

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

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Mappers\ReportsMapper as ReportsMapper;

class AdminController extends MyBaseController {

	/**
	 * Show login form
	 * @access public
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function login() {
		return view('admin.login');
	}

	/**
	 * Check login credentials
	 * @access public
	 * @param Request $request
	 * @return mixed
	 */
	public function authenticate(Request $request) {

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$this->validate($request, $rules);

		// get credentials
		$credentials = $request->only('username', 'password');

		// authenticate
		try {
			/** @noinspection PhpUndefinedMethodInspection */
			if (Auth::attempt($credentials)) {
				return redirect()->intended('/admin/menu');
			} else {
				return redirect('login')->with('flashMessage', 'Invalid username or password.');
			}
		} catch (\Exception $e) {
			$flashMessage = 'An error occurred.';
		}
		return redirect('login')->with('flashMessage', $flashMessage);
	}

	/**
	 * Show logout page
	 * @access  public
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function logout() {
		return view('admin.logout');
	}

	/**
	 * Un-authenticate; ends session
	 * @access public
	 * @return mixed
	 */
	public function unauthenticate() {
		/** @noinspection PhpUndefinedMethodInspection */
		Auth::logout();
		return redirect('logout')->with('flashMessage', "You've been logged out!");
	}

	/**
	 * Show admin menu
	 * @access public
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function menu() {
		return view('admin.menu');
	}

	/**
	 * Clear cache
	 * @access public
	 * @return mixed
	 */
	public function clearCache() {
		ReportsMapper::clearCache();
		return redirect('/admin/menu')->with('flashMessage', 'Cache cleared!');
	}

	/**
	 * Load Mongodb from MySQL
	 * @access public
	 * @return mixed
	 */
	public function loadMongodb() {
		// TODO: use exec() to execute a shell script in the background
		return redirect('/admin/menu')->with('flashMessage', 'Loading Mongodb.');
	}

	/**
	 * return validation rules for authentication
	 * @access  private
	 * @return array
	 */
	private function getValidationRules() {
		return [
			'username' => 'required|max:50',
			'password' => 'required|max:50',
		];
	}

}
