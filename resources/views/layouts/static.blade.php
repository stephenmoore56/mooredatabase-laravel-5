<!DOCTYPE html>
<html lang="en" data-ng-app="mooredatabaseStaticApp">
<head>
@include('partials.head')
@include('partials.angularjs')
@include('partials.staticjs')
</head>
<body>
@include('partials.navbar')
<div class="container-fluid">
	<div class="row-fluid">
		<div class="col-sm-6 col-no-pad">
			<div data-ng-view></div>
			@if($flashMessage = Session::get('flashMessage'))
				<div class="alert alert-danger">
					<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
					{{ $flashMessage }}
				</div>
			@endif
		</div>
		<div class="col-sm-1 col-no-pad col-spacer">
		</div>
		<div class="col-sm-4 col-no-pad">
			@include('partials.carousel')
		</div>
	</div>
</div>
@include('partials.footer')
@include('partials.bootstrapjs')
@include('partials.googleAnalytics')
</body>
</html>
