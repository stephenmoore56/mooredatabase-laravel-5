@extends('layouts.admin')

@section('content')
<div class="col-md-6">

	<form id="loginForm" class="form-signin form-horizontal" action="/login" method="post">
		<fieldset>
			<legend>Log In</legend>
			<div class="form-group">
				<label for="username" class="label-control col-sm-2">Username:</label>
				<div class="col-sm-10">
					<input type="text" id="username" name="username" class="form-control input-sm"
						   placeholder="Username" size="50" maxlength="50">
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="label-control col-sm-2">Password:</label>
				<div class="col-sm-10">
					<input type="password" id="password" name="password" class="form-control input-sm"
						   placeholder="Password" size="50" maxlength="50" autocomplete="off">
				</div>
			</div>
			<input type="hidden" name="_token" value="{{ csrf_token() }}">
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-4">
					<button type="submit" class="btn btn-primary btn-sm">Log In</button>
				</div>
			</div>
		</fieldset>
	</form>

	@if($flashMessage = Session::get('flashMessage'))
		<div class="alert alert-danger">
			<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			{{ $flashMessage }}
		</div>
	@endif

	@include('partials.validationErrors')

</div>
@stop

@section("page_script")
<script src="{{ asset("js/admin/loginValidator.js") }}"></script>
<script src="{{ asset("js/admin/login.js") }}"></script>
@stop
