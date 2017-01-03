<div class="form-group">
	{{ Form::label('country_code','Country:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::select('country_code', $countries, null, array('class' => 'form-control input-sm')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('state_code','State:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::select('state_code', $states, null, array('class' => 'form-control input-sm')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('county_name','County:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::select('county_name', $counties, null, array('class' => 'form-control input-sm')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('ecs_subsection_id','Subsection:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::select('ecs_subsection_id', $ecs_subsections, null, array('class' => 'form-control input-sm')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('location_name','Name:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::text('location_name', null,
					  array('class' => 'form-control input-sm', 'size' => '50', 'maxlength' => '50')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('latitude','Latitude:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::text('latitude', null,
					  array('class' => 'form-control input-sm', 'size' => '6', 'maxlength' => '6')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('longitude','Longitude:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::text('longitude', null,
					  array('class' => 'form-control input-sm', 'size' => '7', 'maxlength' => '7')) }}
	</div>
</div>
<div class="form-group">
	{{ Form::label('notes','Notes:', array('class' => 'control-label col-sm-2')) }}
	<div class="col-sm-10">
		{{ Form::textarea('notes', null,
						  array('class' => 'form-control input-sm', 'rows' => '8')) }}
	</div>
</div>
<div class="form-group">
	<div class="btn-group-sm col-sm-offset-2 col-sm-10">
		<button type="submit" class="btn btn-primary">
			<span class="glyphicon glyphicon-save" aria-hidden="true"></span>
			Save
		</button>	
		<a class="btn btn-info" href="/admin/locations">
			<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
			Locations
		</a>
		<a class="btn btn-success" href="/admin/menu">
			<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
			Menu
		</a>
	</div>
</div>