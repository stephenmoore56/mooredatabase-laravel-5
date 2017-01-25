@extends('layouts.admin')

@section('content')
<div class="col-sm-6">

	{{ Form::open(array('url' => '/admin/trips', 'class' => 'form-horizontal', 'id' => 'tripForm')) }}
		<fieldset>
			<legend>Add Trip</legend>
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
