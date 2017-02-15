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
		<div app-root>
			Loading...
		</div>
	</div>
	<div ng-carousel style="display: none">
	</div>
</div>
@include('partials.googleAnalytics')
</body>
</html>
