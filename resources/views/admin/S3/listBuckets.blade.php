@extends('layouts.admin')

@section('content')
	<div class="col-md-8">
		<div class="page_header">
			<h1>
				S3 Buckets
			</h1>
		</div>
		@if($flashMessage = Session::get('flashMessage'))
			<div class="alert alert-info">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				{{ $flashMessage }}
			</div>
		@endif
		@include('partials.menuButton')
		<table id="S3BucketList" class="table table-striped table-condensed table-bordered">
			<thead>
			<tr>
				<th>Name</th>
				<th>Created</th>
				<th class="text-center">Actions</th>
			</tr>
			</thead>
			<tbody>
			@foreach ($buckets as $bucket)
				<tr>
					<td>{{ $bucket['Name'] }}</td>
					<td>{{ $bucket['CreationDate'] }}</td>
					<td class="text-center">
						<a class="btn btn-info btn-xs" href="/admin/listS3Objects/{{ $bucket['Name'] }}">
							List Objects
							<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
						</a>
					</td>
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
@stop