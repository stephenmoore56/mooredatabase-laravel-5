@extends('layouts.admin')

@section('content')
<div class="col-md-8">
	<div class="page_header">
		<h1>
			Locations
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
		@include('partials.addLocationButton')
		<div class="form-group">
			<label for="filterLocations" class="label-control">Filter:</label>
			<input type="search" id="filterLocations" name="filterLocations"
			class="form-control input-sm" placeholder="Search for..." size="50" maxlength="50">
			<span id="locationCount">{{ count($locations) }} Locations</span>
		</div>
	</form>
	<table id="locationList" class="table table-striped table-condensed table-bordered">
		<thead>
			<tr>
				<th>Name</th>
				<th class="text-right">Trips</th>
				<th colspan="4" class="text-center">Actions</th>
			</tr>
		</thead>
		<tbody>
			@foreach ($locations as $location)
				<tr>
					<td>{{ $location->location_name }}, {{ $location->county_name }} County, {{ $location->state_code }} {{ $location->country_code }}</td>
					<td class="text-right">{{ $location->trips }}</td>
					<td class="text-center">
						<a class="btn btn-warning btn-xs" href="/admin/locations/{{ $location->id }}/edit">
							<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							Edit
						</a>
					</td>
					<td class="text-center">
						<a class="btn btn-info btn-xs" target="_blank" href="http://www.google.com/maps/place/{{ $location->latitude }},{{ $location->longitude }}/@{{ $location->latitude }},{{ $location->longitude }},15z">
							<span class="glyphicon glyphicon-globe" aria-hidden="true"></span>
							Map
						</a>
					</td>
					<td class="text-center">
						<a class="btn btn-info btn-xs"
						   target="_blank" href="{{ $location->subsection_url }}">
						   	<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
							ECS
						</a>
					</td>
					<td class="text-center">
						@if($location->trips == 0)
							{{ Form::open(array(
								'route' => array('admin.locations.destroy', $location->id),
								'method' => 'DELETE',
								'id' => 'form_deleteLocation'.$location->id)) }}
								<button type="submit" class="btn btn-danger btn-xs deleteLocation" id="deleteLocation{{ $location->id }}">
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
<script src={{ asset("js/admin/locations/list.js") }}></script>
@stop