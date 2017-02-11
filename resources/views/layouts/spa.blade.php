<!DOCTYPE html>
<html lang="en">
<head>
	@include('partials.head')
	@include('partials.bootstrapjs')
	@include('partials.spajs')
</head>
<body">
@include('partials.navbar')
<div class="container-fluid" data-ng-cloak>
	<div app-root class="row-fluid">
		Loading...
	</div>
</div>
@include('partials.footer')
@include('partials.googleAnalytics')
</body>
</html>
