@extends('layouts.report_list', ['controller' => 'speciesForMonthCtrl'])

@section('title')
	Species for Month
@stop

@section('page_header')
	Species for Month of <% monthName %>
@stop

@section('content1')
	<form class="form-inline filterForm">
		@include('partials.backButton')
		@include('partials.searchBirds')
		@include('partials.orderFilter')
		@include('partials.topN')
		<input type="hidden" id="monthNumber" value="{{ $monthNumber }}"/>
	</form>
	@include('partials.speciesCount')
@stop

@section('content2')
	<data-species-list data-ng-show="filtered.length > 0"></data-species-list>
@stop
