@extends('layouts.admin')

@section('content')
<div class="col-md-6">

	@if($errors->has(''))
		<div class="alert alert-danger">
			<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			@foreach ($errors->all() as $error)
                {{ $error }}<br>
            @endforeach
		</div>
	@endif

	{{ Form::model($location,
		           array('route' => array('locations.update', $location->id), 'method' => 'PUT', 'class' => 'form-horizontal', 'id' => 'locationForm')) }}
		<fieldset>
			<legend>Edit Location</legend>
			@include('admin.locations.form')
		</fieldset>
	{{ Form::close() }}


</div>
@stop

@section("page_script")
<script src={{ asset("js/admin/locations/create.js") }}></script>
<script src={{ asset("js/admin/locations/locationValidator.js") }}></script>
@stop