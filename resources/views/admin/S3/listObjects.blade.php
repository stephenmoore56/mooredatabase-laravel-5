@extends('layouts.admin')

@section('content')
	<div class="col-md-8">
		<div class="page_header">
			<h1>
				Objects in S3 Bucket {{ $bucket }}
			</h1>
		</div>
		@if($flashMessage = Session::get('flashMessage'))
			<div class="alert alert-info">
				<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
				{{ $flashMessage }}
			</div>
		@endif
		<form class="form-inline filterForm">
			@include('partials.menuButton')
			<a class="btn btn-info btn-sm" href="/admin/listS3Buckets">
				<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
				Buckets
			</a>
		</form>
		<table id="S3ObjectList" class="table table-striped table-condensed table-bordered">
			<thead>
			<tr>
				<th>Key</th>
				<th class="text-right">Size</th>
				<th>Last Modified</th>
				<th class="text-center">Actions</th>
			</tr>
			</thead>
			<tbody>
			@foreach ($objects as $object)
				<tr>
					<td>{{ $object['Key'] }}</td>
					<td class="text-right">{{ $object['Size'] }}</td>
					<td>{{ $object['LastModified'] }}</td>
					<td class="text-center">
						<a class="btn btn-warning btn-xs" href="/admin/downloadS3Object/{{ $bucket }}/{{ $object['Key'] }}">
							<span class="glyphicon glyphicon-cloud-download aria-hidden="true"></span>
							Download
						</a>
					</td>
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
@stop