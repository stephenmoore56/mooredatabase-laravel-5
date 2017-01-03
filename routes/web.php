<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

// static content routes
Route::get('/', function () {
	return View::make('static-content.static-content');
});

// birding report template routes
Route::get('reports/clearCache', 'ReportsController@clearCache');
Route::get('reports/', 'ReportsController@speciesByMonth');
Route::get('reports/speciesByMonth', 'ReportsController@speciesByMonth');
Route::get('reports/speciesByYear', 'ReportsController@speciesByYear');
Route::get('reports/speciesForMonth/{monthNumber}', 'ReportsController@speciesForMonth');
Route::get('reports/speciesForYear/{year}', 'ReportsController@speciesForYear');
Route::get('reports/speciesDetail/{speciesId}', 'ReportsController@speciesDetail');
Route::get('reports/speciesByOrder', 'ReportsController@speciesByOrder');
Route::get('reports/speciesForOrder/{orderId}', 'ReportsController@speciesForOrder');
Route::get('reports/speciesAll', 'ReportsController@speciesAll');
Route::get('reports/searchAll', 'ReportsController@searchAll');
Route::get('reports/speciesByLocation', 'ReportsController@speciesByLocation');
Route::get('reports/speciesForLocation/{locationId}', 'ReportsController@speciesForLocation');
Route::get('reports/birdLookup', 'ReportsController@birdLookup');

// posts, puts, and deletes require csrf check
//Route::when('*', 'csrf', ['post', 'put', 'delete']);

// login and logout routes not requiring authentication
Route::get('login', 'AdminController@login');
Route::post('login', 'AdminController@authenticate');
Route::get('logout', 'AdminController@logout');

// admin routes all require authenticated user
Route::group(['prefix' => 'admin', 'before' => 'auth'], function () {
	Route::get('logout', 'AdminController@unauthenticate');
	Route::get('menu', 'AdminController@menu');
	Route::get('clearCache', 'AdminController@clearCache');
	Route::get('trips/{id}/sightings', 'TripController@sightings');
	Route::resource('sightings', 'SightingController');
	Route::resource('trips', 'TripController');
	Route::resource('locations', 'LocationController');
	Route::get('sendTestMailSwift', 'MailController@sendTestMailSwift');
	Route::get('sendTestMailLaravel', 'MailController@sendTestMailLaravel');
});

// catch-all route; eliminates 404's
//App::missing(function ($exception) {
//	if (Auth::check()) {
//		return Redirect::to('/admin/menu');
//	} else {
//		return Redirect::to('/');
//	}
//});


