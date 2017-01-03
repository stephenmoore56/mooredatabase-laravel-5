<!DOCTYPE html>
<html lang="en" data-ng-app="mooredatabaseReportsApp">
<head>
@include('partials.head')
@include('partials.angularjs')
@include('partials.reportsjs')
</head>
<body data-ng-controller="{{ $controller }}">
@include('partials.navbar')
<div class="container-fluid" data-ng-cloak>
	<div class="row-fluid">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">
					@yield('page_header')
				</h3>
			</div>
			<div class="panel-body">
				@yield('content1')	
			</div>
			@yield('content2')
		</div>
	</div>
</div>
@include('partials.bootstrapjs')
@yield('report_scripts')
@include('partials.googleAnalytics')
</body>
</html>
