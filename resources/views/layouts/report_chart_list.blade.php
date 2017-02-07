<!DOCTYPE html>
<html lang="en">
<head>
@include('partials.head')
@include('partials.bootstrapjs')
@include('partials.staticjs')
</head>
<body">
@include('partials.navbar')
<div class="container-fluid" data-ng-cloak>
	<div app-root class="row-fluid">
		Loading...
	</div>
</div>
@yield('report_scripts')
@include('partials.googleAnalytics')
</body>
</html>
