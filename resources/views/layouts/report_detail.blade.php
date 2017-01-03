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
		<div class="col-no-pad col-sm-6">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">
						@yield('panel_header_1')
					</h3>
				</div>
				<div class="panel-body">
					@yield('content1')
				</div>
			</div>
		</div>
		<div class="col-no-pad col-spacer col-sm-1">
		</div>
		<div class="col-no-pad col-sm-5">
			<div class="panel panel-primary" data-ng-show="showChart">
				<div class="panel-heading">
					<h3 class="panel-title">
						@yield('panel_header_2')
					</h3>
				</div>
				<div class="panel-body">
					@yield('content2')
				</div>
			</div>
		</div>
	</div>
</div>
@include('partials.bootstrapjs')
@yield('report_scripts')
@include('partials.googleAnalytics')
</body>
</html>
