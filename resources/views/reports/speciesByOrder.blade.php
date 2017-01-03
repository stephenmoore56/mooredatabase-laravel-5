@extends('layouts.report_chart_list', ['controller' => 'speciesByOrderCtrl'])

@section('title')
	Species By Order
@stop

@section('page_header')
	Species By Order
@stop

@section('content1')
	<div id="chart_div_1" class="chart_div"></div>
@stop

@section('content2')
	<table class="table table-striped table-condensed table-bordered">
		<thead>
			<tr>
				<th data-ng-click="sortResults(['order_name'])">Order</th>
				<th class="text-center">Action</th>
				<th class="hidden-xs">Notes</th>
				<th class="text-right hidden-xs" data-ng-click="sortResults(['order_species_count_all'])">Total Species</th>
				<th class="text-right" data-ng-click="sortResults(['speciesCount'])">Species <span class="hidden-xs">Sighted</span></th>
			</tr>
		</thead>
		<tbody>
		<tr data-ng-repeat="order in data | orderBy:predicate:reverse">
			<td><% order.order_name %></td>
			<td class="text-center">
				<a class="btn btn-info btn-xs" href="/reports/speciesForOrder/<% order.id %>">
					View Species
					<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
				</a>
			</td>
			<td class="hidden-xs"><% order.order_notes %></td>
			<td class="text-right hidden-xs"><% order.order_species_count_all %></td>
			<td class="text-right"><% order.speciesCount %></td>
		</tr>
		</tbody>
	</table>
@stop
