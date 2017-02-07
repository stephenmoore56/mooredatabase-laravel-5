@extends('layouts.report_chart_list')

@section('title')
	Species &amp; Trips By Year
@stop

@section('page_header')
	Species &amp; Trips By Year
@stop

@section('content1')
	<div id="chart_div_1" class="chart_div"></div>
@stop

@section('content2')
	<table class="table table-striped table-condensed table-bordered">
		<thead>
			<tr>
				<th class="text-center" data-ng-click="sortResults('yearNumber')">Year</th>
				<th class="text-center">Action</th>
				<th class="text-right" data-ng-click="sortResults('speciesCount')">Species</th>
				<th class="text-right" data-ng-click="sortResults('tripCount')">Trips</th>
			</tr>
		</thead>
		<tbody>
		<tr data-ng-repeat="year in data | orderBy:predicate:reverse">
			<td class="text-center"><% year.yearNumber %></td>
			<td class="text-center">
				<a class="btn btn-info btn-xs" href="/reports/speciesForYear/<% year.yearNumber %>">
					View Species
					<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
				</a>
			</td>
			<td class="text-right"><% year.speciesCount %></td>
			<td class="text-right"><% year.tripCount %></td>
		</tr>
		</tbody>
	</table>
@stop
