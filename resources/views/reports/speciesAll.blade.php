@extends('layouts.report_list', ['controller' => 'speciesAllCtrl'])

@section('title')
	All Species Sighted
@stop

@section('page_header')
	All Species Sighted
@stop

@section('content1')
	<form class="form-inline filterForm">
		@include('partials.searchBirds')
		@include('partials.orderFilter')
		@include('partials.topN')
	</form>
	@include('partials.speciesCount')
@stop

@section('content2')
	<data-species-list data-ng-show="filtered.length > 0"></data-species-list>
@stop
