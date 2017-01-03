<div class="form-group">
	{{ Form::label('location_id','Location:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::select('location_id', $locations, null, array('class' => 'form-control input-sm')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('trip_date','Date:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::text('trip_date', null,
					  array('class' => 'form-control input-sm', 'size' => '10', 'maxlength' => '10')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('notes','Notes:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::textarea('notes', null, array('class' => 'form-control input-sm', 'rows' => '8')) }}
	</div>
</div>
<div class="form-group">
	<div class="btn-group-sm col-sm-offset-2 col-sm-10">
		<button type="submit" class="btn btn-primary">
			<span class="glyphicon glyphicon-save" aria-hidden="true"></span>
			Save
		</button>	
		@if(isset($trip))
			<a class="btn btn-warning" href="/admin/trips/{{ $trip->id }}/sightings">
				<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
				Sightings
			</a>
		@endif
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
