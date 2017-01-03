@extends('layouts.report_chart_list', ['controller' => 'speciesByLocationCtrl'])

@section('title')
	Species &amp; Trips By Location
@stop

@section('page_header')
	Species &amp; Trips By Location
@stop

@section('content1')
	<div id="chart_div_1" class="chart_div"></div>
@stop

@section('content2')
	<table class="table table-striped table-condensed table-bordered">
		<thead>
			<tr>
				<th data-ng-click="sortResults('location_name')">Location</th>
				<th class="text-center">Action</th>
				<th class="text-right" data-ng-click="sortResults('species_count')">Species</th>
				<th class="text-right" data-ng-click="sortResults('trip_count')">Trips</th>
			</tr>
		</thead>
		<tbody>
		<tr data-ng-repeat="location in data | orderBy:predicate:reverse">
			<td><% location.location_name %>, <% location.county_name %>, <% location.state_code %> <%
				location.country_code %>
			</td>
			<td class="text-center">
				<a class="btn btn-info btn-xs"
				   href="/reports/speciesForLocation/<% location.id %>">
					Detail
					<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
			   </a>
			</td>
			<td class="text-right"><% location.species_count %></td>
			<td class="text-right"><% location.trip_count %></td>
		</tr>
		</tbody>
	</table>
@stop
