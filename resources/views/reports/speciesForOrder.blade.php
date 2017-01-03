@extends('layouts.report_list', ['controller' => 'speciesForOrderCtrl'])

@section('title')
	Species for Order
@stop

@section('page_header')
	Species for Order <% orderName %>
@stop

@section('content1')
	<form class="form-inline filterForm">
		@include('partials.backButton')
		@include('partials.searchBirds')
		@include('partials.topN')
		<input type="hidden" id="orderId" value="{{ $orderId }}"/>
	</form>
	@include('partials.speciesCount')
@stop

@section('content2')
	<data-species-list data-ng-show="filtered.length > 0"></data-species-list>
@stop
