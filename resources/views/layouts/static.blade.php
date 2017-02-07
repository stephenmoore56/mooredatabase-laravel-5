<!DOCTYPE html>
<html lang="en">
<head>
@include('partials.head')
@include('partials.bootstrapjs')
@include('partials.staticjs')
</head>
<body>
@include('partials.navbar')
<div class="container-fluid" data-ng-cloak>
	<div class="row-fluid">
		<div class="col-sm-6 col-no-pad">
			<div app-root></div>
		</div>
		<div class="col-sm-1 col-no-pad col-spacer">
		</div>
		<div ng-carousel class="col-sm-4 col-no-pad">
		</div>
	</div>
</div>
@include('partials.footer')
@include('partials.googleAnalytics')
</body>
</html>
