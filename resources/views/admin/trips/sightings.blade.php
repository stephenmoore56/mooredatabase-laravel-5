@extends('layouts.sightings')

@section('content')
<div class="row-fluid">
	<div class="col-sm-6">
		<div class="page_header">
			<h1>
				Edit Sightings
			</h1>
		</div>

		<h3>Trip</h3>

		<table class="table table-condensed">
			<tbody>
				<tr>
					<th>Location</th>
					<td>{{ $location->location_name }}</td>
				</tr>
				<tr>
					<th>Date</th>
					<td>{{ $trip->trip_date }}</td>
				</tr>
				<tr>
					<th>Notes</th>
					<td>{{ $trip->notes }}</td>
				</tr>
			</tbody>
		</table>
		<div class="btn-group-sm">
			<a class="btn btn-warning" href="/admin/trips/{{ $trip->id }}/edit">
				<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
				Trip
			</a>
			<a class="btn btn-info" href="/admin/trips">
				<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
				Trips
			</a>
			<a class="btn btn-success" href="/admin/menu">
				<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
				Menu
			</a>
		</div>
	</div>
</div>

<div class="row-fluid">
	<div class="col-sm-8">

		<h3>Add Sighting</h3>

		@if($flashMessage = Session::get('flashMessage'))
			<div class="alert alert-info">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				{{ $flashMessage }}
			</div>
		@endif

		@if($errors->has(''))
			<div class="alert alert-danger">
				<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
				@foreach ($errors->all() as $error)
	                {{ $error }}<br>
	            @endforeach
			</div>
		@endif

		{{ Form::open(array(
			'url' => '/admin/sightings/',
			'class' => 'filterForm form-inline input-sm',
			'id' => 'addSighting'))
		}}
				<div class="form-group">
					{{ Form::label('search','Species:', array('class' => 'control-label')) }}
					<input type="search" id="search" name="search" class="form-control input-sm"
						   placeholder="Search for..." size="50" maxlength="50">
				</div>
				<input id="aou_list_id" name="aou_list_id" type="hidden" value="">
				<input id="trip_id"     name="trip_id"     type="hidden" value="{{ $trip->id }}">
		{{ Form::close() }}

		<h3>Sightings</h3>

		<p class="form-static-control"><b>{{ count($sightings) }} Species</b></p>

		@if(count($sightings) > 0)
		<table class="table table-striped table-condensed table-bordered">
				<thead>
					<tr>
						<th>Common Name</th>
						<th class="hidden-xs">Scientific Name</th>
						<th class="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					@foreach($sightings as $sighting)
						<tr>
							<td>{{ $sighting->common_name }}</td>
							<td class="hidden-xs scientific_name">{{ $sighting->scientific_name }}</td>
							<td class="text-center">
								{{ Form::open(array(
									'route' => array('sightings.destroy', $sighting->id),
									'method' => 'DELETE',
									'id' => 'form_deleteSighting'.$sighting->id)) }}
									<button id="deleteSighting{{ $sighting->id }}" class="btn btn-danger btn-xs deleteSighting">
										<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
										Remove
									</button>
								{{ Form::close() }}
							</td>
						</tr>
					@endforeach
				</tbody>
		</table>
		@endif

	</div>
</div>
@stop

@section("page_script")
<script src={{ asset("js/admin/trips/editSightings.js") }}></script>
@stop
