@extends('layouts.report_location_detail', ['controller' => 'speciesForLocationCtrl'])

@section('title')
	Location
@stop

@section('panel_header_1')
	Location Detail
@stop

@section('content1')
	<table class="table table-condensed">
		<tbody>
			<tr>
				<th>Name</th>
				<td><% location.location_name %>, <% location.county_name %> County, <% location.state_code %> <% location.country_code %></td>
			</tr>
			<tr>
				<th>Notes</th>
				<td><% location.notes %></td>
			</tr>
			<tr>
				<th>Trips</th>
				<td><% location.trip_count %></td>
			</tr>
		</tbody>
	</table>
	<form class="form-inline filterForm">
		<div class="form-group">
			<a class="btn btn-info btn-sm" target="_blank"
				href="http://www.google.com/maps/place/<% location.latitude %>,<% location.longitude %>/@<% location.latitude %>,<% location.longitude %>,15z">
				<span class="glyphicon glyphicon-globe" aria-hidden="true"></span>
				Map</a>
		</div>
		<div class="form-group">
			<a class="btn btn-info btn-sm" target="_blank"
				href="<% location.ecs_subsection_url %>">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				ECS Subsection</a>
		</div>
	</form>
@stop

@section('panel_header_2')
	Species for <% location.location_name %>
@stop

@section('content2')
	<form class="form-inline filterForm">
		@include('partials.backButton')
		@include('partials.searchBirds')
		@include('partials.orderFilter')
		@include('partials.topN')
		<input type="hidden" id="locationId" value="{{ $locationId }}"/>
	</form>
	@include('partials.speciesCount')
@stop

@section('content3')
	<data-species-list data-ng-show="filtered.length > 0"></data-species-list>
@stop
