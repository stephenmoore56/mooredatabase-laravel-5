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

// static content routes
Route::get('/', function () {
	return View::make('static-content.static-content');
});
Route::get('/education', function () {
	return View::make('static-content.static-content');
});
Route::get('/training', function () {
	return View::make('static-content.static-content');
});
Route::get('/certifications', function () {
	return View::make('static-content.static-content');
});
Route::get('/contact', function () {
	return View::make('static-content.static-content');
});

// birding report template routes
Route::get('reports/clearCache', 'ReportsController@clearCache');
Route::group(['prefix' => 'reports'], function () {
	Route::get('months/{monthNumber?}', function () {
		return View::make('reports.report');
	});
	Route::get('years/{year?}', function () {
		return View::make('reports.report');
	});
	Route::get('orders/{orderId?}', function () {
		return View::make('reports.report');
	});
	Route::get('locations/{locationId?}', function () {
		return View::make('reports.report');
	});
	Route::get('birdLookup', function () {
		return View::make('reports.report');
	});
	Route::get('all', function () {
		return View::make('reports.report');
	});
	Route::get('search', function () {
		return View::make('reports.report');
	});
	Route::get('species/{speciesId}', function () {
		return View::make('reports.report');
	});
});

// resume download from S3
Route::get('aws/downloadResume', 'AwsController@downloadResume');

// login and logout routes not requiring authentication
Route::get('login', 'AdminController@login');
Route::post('login', 'AdminController@authenticate');
Route::get('logout', 'AdminController@logout');

// admin routes all require authenticated user
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {
	Route::get('logout', 'AdminController@unauthenticate');
	Route::get('menu', 'AdminController@menu');
	Route::get('clearCache', 'AdminController@clearCache');
	Route::get('trips/{id}/sightings', 'TripController@sightings');
	Route::resource('sightings', 'SightingController');
	Route::resource('trips', 'TripController');
	Route::resource('locations', 'LocationController');
	Route::get('sendTestMailSwift', 'MailController@sendTestMailSwift');
	Route::get('sendTestMailLaravel', 'MailController@sendTestMailLaravel');
	Route::get('listS3Buckets', 'AwsController@listS3Buckets');
	Route::get('listS3Objects/{bucket}', 'AwsController@listS3Objects');
	Route::get('downloadS3Object/{bucket}/{key}', 'AwsController@downloadS3Object');
	Route::post('uploadS3Object', 'AwsController@uploadS3Object');
	Route::get('deleteS3Object/{bucket}/{key}', 'AwsController@deleteS3Object');
});