@extends('layouts.admin')

@section('content')
	<div class="col-sm-6">

		{{ Form::model($trip,
					   array('route' => array('trips.update', $trip->id), 'method' => 'PUT', 'class' => 'form-horizontal', 'id' => 'tripForm')) }}
		<fieldset>
			<legend>Edit Trip</legend>
			@include('admin.trips.form')
		</fieldset>
		{{ Form::close() }}

		@include('partials.validationErrors')

	</div>
@stop

@section("page_script")
	<script src={{ asset("js/admin/trips/create.js") }}></script>
	<script src={{ asset("js/admin/trips/tripValidator.js") }}></script>
@stop
