@extends('layouts.admin')

@section('content')
	<div class="col-md-8">

		<div class="page_header">
			<h1>
				Admin Menu
			</h1>
		</div>

		@if($flashMessage = Session::get('flashMessage'))
			<div class="alert alert-info">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				{{ $flashMessage }}
			</div>
		@endif

		<div>
			<!-- Nav tabs -->
			<ul class="nav nav-pills" role="tablist">
				<li role="presentation" class="active"><a href="#trips" aria-controls="trips" role="tab"
														  data-toggle="tab">Trips</a></li>
				<li role="presentation"><a href="#locations" aria-controls="locations" role="tab" data-toggle="tab">Locations</a>
				</li>
				<li role="presentation">
					<a href="#S3" aria-controls="S3" role="tab" data-toggle="tab">Amazon S3</a>
				</li>
				<li role="presentation"><a href="#system" aria-controls="system" role="tab" data-toggle="tab">System</a>
				</li>
			</ul>

			<!-- Tab panes -->
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane active" id="trips">
					<p>
					<ul class="menu-list">
						<li>{{ HTML::link('admin/trips/create','Add Trip') }}</li>
						<li>{{ HTML::link('admin/trips/','List Trips') }}</li>
					</ul>
					</p>
				</div>
				<div role="tabpanel" class="tab-pane" id="locations">
					<p>
					<ul class="menu-list">
						<li>{{ HTML::link('admin/locations/create','Add Location') }}</li>
						<li>{{ HTML::link('admin/locations/','List Locations') }}</li>
					</ul>
					</p>
				</div>
				<div role="tabpanel" class="tab-pane" id="S3">
					<p>
					<ul class="menu-list">
						<li>{{ HTML::link('admin/listS3Buckets','List Buckets') }}</li>
					</ul>
					</p>
				</div>
				<div role="tabpanel" class="tab-pane" id="system">
					<p>
					<ul class="menu-list">
						<li>{{ HTML::link('admin/sendTestMailSwift','Send Test Mail (Swift)') }}</li>
						<li>{{ HTML::link('admin/sendTestMailLaravel','Send Test Mail (Laravel)') }}</li>
						<li>{{ HTML::link('admin/clearCache','Clear Cache') }}</li>
						<li>{{ HTML::link('admin/logout','Log Out') }}</li>
					</ul>
					</p>
				</div>
			</div>
		</div>

		@if($flashMessage = Session::get('mailMessage'))
			<div class="alert alert-info">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				<pre>{{ $flashMessage }}</pre>
			</div>
		@endif

	</div>
@stop
