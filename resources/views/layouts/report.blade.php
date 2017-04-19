<!DOCTYPE html>
<html lang="en">
<head>
	@include('partials.head')
	@include('partials.bootstrapjs')
	@include('partials.spajs')
</head>
<body>
@include('partials.navbarReports')
<div class="container-fluid" data-ng-cloak>
	<div class="row-fluid">
		<div data-app-root>
			Loading...
		</div>
	</div>
	<div data-ng-carousel class="displayNone">
	</div>
</div>
@include('partials.googleAnalytics')
</body>
</html>
