@extends('layouts.admin')

@section('content')
	<div class="col-sm-10">
		<div class="page_header">
			<h1>
				Trips
			</h1>
		</div>
		@if($flashMessage = Session::get('flashMessage'))
			<div class="alert alert-info">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				{{ $flashMessage }}
			</div>
		@endif
		<form class="form-inline filterForm">
			@include('partials.menuButton')
			@include('partials.addTripButton')
			<div class="form-group">
				<label for="filterTrips" class="label-control">Filter:</label>
				<input type="search" id="filterTrips" name="filterTrips" class="form-control input-sm"
					   placeholder="Search for..." size="50" maxlength="50">
				<span id="tripCount">{{ count($trips) }} Trips</span>
			</div>
		</form>
		<table id="tripList" class="table table-striped table-condensed table-bordered">
			<thead>
			<tr>
				<th>Location</th>
				<th>Date</th>
				<th class="text-right">Sightings</th>
				<th colspan="3" class="text-center">Actions</th>
			</tr>
			</thead>
			<tbody>
			@foreach ($trips as $trip)
				<tr>
					<td>{{ $trip->location_name }}</td>
					<td>{{ $trip->trip_date }}</td>
					<td class="text-right">{{ $trip->sightings }}</td>
					<td class="text-center">
						<a class="btn btn-warning btn-xs" href="/admin/trips/{{ $trip->id }}/edit">
							<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							Trip
						</a>
					</td>
					<td class="text-center">
						<a class="btn btn-warning btn-xs" href="/admin/trips/{{ $trip->id }}/sightings">
							<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							Sightings
						</a>
					</td>
					<td class="text-center">
						@if($trip->sightings == 0)
							{{ Form::open(array(
								'route' => array('trips.destroy', $trip->id),
								'method' => 'delete',
								'id' => 'form_deleteTrip'.$trip->id)) }}
							<button id="deleteTrip{{$trip->id}}" class="btn btn-danger btn-xs deleteTrip">
								<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
								Delete
							</button>
							{{ Form::close() }}
						@endif
					</td>
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
@stop

@section("page_script")
	<script src={{ asset("js/admin/trips/list.js") }}></script>
@stop