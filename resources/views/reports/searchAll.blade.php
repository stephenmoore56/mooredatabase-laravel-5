@extends('layouts.report_list', ['controller' => 'searchAllCtrl'])

@section('title')
	Search All Species
@stop

@section('page_header')
	Search All Species
@stop

@section('content1')
	@include('partials.searchAll')
	@include('partials.speciesCount')
@stop

@section('content2')
	<data-species-list data-ng-show="filtered.length > 0"></data-species-list>
@stop
