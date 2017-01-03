@extends('layouts.report_list', ['controller' => 'speciesForYearCtrl'])

@section('title')
	Species for Year
@stop

@section('page_header')
	Species for Year <% year %>
@stop

@section('content1')
	<form class="form-inline filterForm">
		@include('partials.backButton')
		@include('partials.searchBirds')
		@include('partials.orderFilter')
		@include('partials.topN')
		<input type="hidden" id="year" value="{{ $year }}"/>
	</form>
	@include('partials.speciesCount')
@stop

@section('content2')
	<data-species-list-year data-ng-show="filtered.length > 0"></data-species-list-year>
@stop
