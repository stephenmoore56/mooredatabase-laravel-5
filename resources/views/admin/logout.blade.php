@extends('layouts.admin')

@section('content')
<div class="col-md-6">
	<div class="page_header">
		<h1>
			Log Out
		</h1>
	</div>

	@if($flashMessage = Session::get('flashMessage'))
		<div class="alert alert-info">
			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
			{{ $flashMessage }}
		</div>
	@endif

</div>
@stop
