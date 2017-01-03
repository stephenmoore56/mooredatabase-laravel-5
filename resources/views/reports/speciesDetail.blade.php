@extends('layouts.report_detail', ['controller' => 'speciesDetailCtrl'])

@section('title')
	Species Detail
@stop

@section('panel_header_1')
	<input type="hidden" id="speciesId" value="{{ $speciesId }}"/>
	Species Detail for <% common_name %>
@stop

@section('content1')
	<table class="table table-condensed">
		<tbody>
			<tr>
				<th>Common Name</th>
				<td><% bird.common_name %></td>
			</tr>
			<tr>
				<th>Scientific Name</th>
				<td clasS="scientific_name"><% bird.scientific_name %></td>
			</tr>
			<tr>
				<th>Order</th>
				<td><% bird.order_name %></td>
			</tr>
			<tr>
				<th>Family</th>
				<td><% bird.family %> <% bird.subfamily %></td>
			</tr>
			<tr>
				<th>Last Seen</th>
				<td><% bird.last_seen || 'NA' %></td>
			</tr>
			<tr>
				<th>Earliest / Latest</th>
				<td><% bird.earliestSighting || 'NA' %> / <% bird.latestSighting || 'NA' %></td>
			</tr>
		</tbody>
	</table>
	<form class="form-inline filterForm">
		<div class="form-group">
			<button type="button" class="btn btn-success btn-sm" data-ng-click="goBack()">
				<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
				Back
			</button>
		</div>
		<div class="form-group">
			<a href="http://en.wikipedia.org/wiki/<% bird.common_name %>" target="_blank"
			   class="btn btn-info btn-sm">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				Wikipedia
		   </a>
		</div>
		<div class="form-group">
			<a href="http://images.google.com/images?q=<% bird.common_name %>&sout=1" target="_blank"
			   class="btn btn-info btn-sm">
	   			<span class="glyphicon glyphicon-picture" aria-hidden="true"></span>
				Google Images
		   </a>
	   </div>
   	</form>
@stop

@section('panel_header_2')
	Sightings By Month for <% common_name %>
@stop

@section('content2')
	<div id="chart_div_1" class="chart_div"></div>
@stop
