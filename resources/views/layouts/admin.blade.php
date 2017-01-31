<!DOCTYPE html>
<html lang="en">
<head>
@include('partials.head')
@include('partials.bootstrapjs')
@include('partials.jqueryui')
</head>
<body>
@include('partials.navbarReports')
<div class="container-fluid">
	<div class="row-fluid">
		@yield("content")
	</div>
</div>
@yield("page_script")
@include('partials.googleAnalytics')
</body>
</html>
