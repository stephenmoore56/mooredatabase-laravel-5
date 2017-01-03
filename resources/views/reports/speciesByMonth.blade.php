@extends('layouts.report_chart_list', ['controller' => 'speciesByMonthCtrl'])

@section('title')
	Species &amp; Trips By Month
@stop

@section('page_header')
	Species &amp; Trips By Month
@stop

@section('content1')
	<div id="chart_div_1" class="chart_div"></div>
@stop

@section('content2')
	<table class="table table-striped table-condensed table-bordered">
		<thead>
			<tr>
				<th data-ng-click="sortResults('monthNumber')">Month</th>
				<th class="text-center">Action</th>
				<th class="text-right" data-ng-click="sortResults('speciesCount')">Species</th>
				<th class="text-right" data-ng-click="sortResults('tripCount')">Trips</th>
			</tr>
		</thead>
		<tbody>
		<tr data-ng-repeat="month in data | orderBy:predicate:reverse">
			<td><% month.monthName %></td>
			<td class="text-center">
				<a class="btn btn-info btn-xs" href="/reports/speciesForMonth/<% month.monthNumber %>">
					View Species
					<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
				</a>
			</td>
			<td class="text-right"><% month.speciesCount %></td>
			<td class="text-right"><% month.tripCount %></td>
		</tr>
		</tbody>
	</table>
@stop
