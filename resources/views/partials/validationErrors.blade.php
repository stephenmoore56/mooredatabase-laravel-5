@if(count($errors) > 0)
	<div class="alert alert-danger">
		<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
		@foreach ($errors->all() as $error)
			{{ $error }}<br>
		@endforeach
	</div>
@endif