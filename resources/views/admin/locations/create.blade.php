@extends('layouts.admin')

@section('content')
	<div class="col-sm-6">

		{{ Form::open(array('url' => '/admin/locations', 'class' => 'form-horizontal', 'id' => 'locationForm')) }}
		<fieldset>
			<legend>Add Location</legend>
			@include('admin.locations.form')
		</fieldset>
		{{ Form::close() }}

		@include('partials.validationErrors')

	</div>
@stop

@section("page_script")
	<script src={{ asset("js/admin/locations/create.js") }}></script>
	<script src={{ asset("js/admin/locations/locationValidator.js") }}></script>
@stop