@extends('layouts.admin')

@section('content')
	<div class="col-md-10">
		<div class="row">
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
			@include('partials.validationErrors')
		</div>
		<div class="row" style="margin-bottom: 5px;">
			<form class="form-inline form-filter">
				@include('partials.menuButton')
				<div class="form-group">
					<a class="btn btn-info btn-sm" href="/admin/listS3Buckets">
						<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
						Buckets
					</a>
				</div>
			</form>
		</div>
		<div class="row">
			{{ Form::open(array('url'=>'admin/uploadS3Object','files'=>true, 'class' => 'form-inline')) }}
			<div class="form-group" style="margin-bottom: 5px;">
				{{ Form::input('text',
							   'fileToUploadTo2',
							   null,
							   array(
							    'id'	=> 'fileToUpload2',
							   	'class' => 'form-control input-sm',
							   	'size' => 50,
							   	'readonly' => 'readonly',
							   	'style' => 'background: white;'
								))
				}}
			</div>
			<div class="form-group" style="margin-bottom: 5px;">
				<button id="fileSelector" class="btn btn-default btn-sm">
					Select File
				</button>
				{{ Form::submit('Upload', array('class' => 'btn btn-primary btn-sm', 'style' => 'margin-right: 0;')) }}
				{{ Form::reset('Reset', array('class' => 'btn btn-warning btn-sm', 'id' => 'resetButton')) }}
			</div>
			<div class="form-group" style="width: 0px; height: 0px; overflow: hidden;">
				{{ csrf_field() }}
				{{ Form::hidden('bucket', $bucket) }}
				{{ Form::file('fileToUpload', array('id'=>'fileToUpload', 'class'=>'form-control input-sm')) }}
			</div>
			{{ Form::close() }}
		</div>

		<div class="row" style="margin-top: 5px;">
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
							<a class="btn btn-warning btn-xs"
							   href="/admin/downloadS3Object/{{ $bucket }}/{{ $object['Key'] }}">
								<span class="glyphicon glyphicon-cloud-download aria-hidden=" true"></span>
								Download
							</a>
							<a class="btn btn-danger btn-xs deleteObject"
							   href="/admin/deleteS3Object/{{ $bucket }}/{{ $object['Key'] }}">
								<span class="glyphicon glyphicon-remove aria-hidden=" true"></span>
								Delete
							</a>
						</td>
					</tr>
				@endforeach
				</tbody>
			</table>
		</div>
	</div>
@stop

@section("page_script")
	<script src={{ asset("js/admin/S3/listObjects.js") }}></script>
@stop