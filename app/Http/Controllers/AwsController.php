<?php

declare(strict_types = 1);

/**
 * AWS access method
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * AdminController class
 *
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Mappers\S3Mapper as S3Mapper;

class AWSController extends MyBaseController {
	/** @noinspection PhpInconsistentReturnPointsInspection */

	/**
	 * Download resume file from S3
	 * @access public
	 * @param Request $request
	 * @return mixed
	 */
	public function downloadResume(Request $request) {

		// validation rules
		$rules = $this->getResumeDownloadValidationRules();

		// validate data using rules
		$this->validate($request, $rules);

		// get filename
		$bucket = 'mooredatabase_documents';
		$filename = $request->input('filename');

		// download
		try {
			// get file contents
			$result = S3Mapper::getObject($bucket, $filename);

			// download
			self::downloadFile($result['Body'], $filename);

		} catch (\Exception $e) {
			$flashMessage = 'An error occurred. ' . $e->getMessage();
			return redirect('/')->with('flashMessage', $flashMessage);
		}

	}/** @noinspection PhpInconsistentReturnPointsInspection */

	/**
	 * Download an S3 object
	 * @param string $bucket
	 * @param string $key
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public static function downloadS3Object(string $bucket, string $key) {
		try {
			// get file contents
			$result = S3Mapper::getObject($bucket, $key);

			// download
			self::downloadFile($result['Body'], $key);

		} catch (\Exception $e) {
			$flashMessage = 'An error occurred. ' . $e->getMessage();
			return back()->withInput()->with('flashMessage', $flashMessage);
		}
	}


	/**
	 * Delete an S3 object
	 * @param string $bucket
	 * @param string $key
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public static function deleteS3Object(string $bucket, string $key) {
		try {
			// get file contents
			S3Mapper::deleteObject($bucket, $key);
			$flashMessage = 'Successfully deleted file ' . $key . '.';
			return back()->withInput()->with('flashMessage', $flashMessage);
		} catch (\Exception $e) {
			$flashMessage = 'An error occurred. ' . $e->getMessage();
			return back()->withInput()->with('flashMessage', $flashMessage);
		}
	}

	/**
	 * List S3 buckets
	 * @return \Illuminate\View\View
	 */
	public static function listS3Buckets() {
		$buckets = S3Mapper::getBuckets();
		return view('admin/S3/listBuckets')->with('buckets', $buckets);
	}

	/**
	 * List S3 object in a bucket
	 * @param string $bucket
	 * @return \Illuminate\View\View
	 */
	public static function listS3Objects(string $bucket) {
		$objects = S3Mapper::getObjects($bucket);
		return view('admin/S3/listObjects')
			->with('bucket', $bucket)
			->with('objects', $objects);
	}

	/**
	 * Upload object to S3
	 * @param Request $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function uploadS3Object(Request $request) {
		try {
			// validate file
			$rules = self::getFileUploadValidationRules();

			// validate data using rules
			$this->validate($request, $rules);

			// upload the object
			$bucket = $request->input('bucket');
			$key = $request->file('fileToUpload')->getClientOriginalName();
			$file_path = $request->file('fileToUpload')->getPathname();
			S3Mapper::putObject($bucket, $key, $file_path);
			return back()->withInput()->with('flashMessage', 'Successfully uploaded file.');
		} catch (\Exception $e) {
			return back()->withInput()->with('flashMessage', 'An error occurred while uploading file.');
		}
	}

	/**
	 * return validation rules
	 * @access  private
	 * @return array
	 */
	private function getResumeDownloadValidationRules() {
		return [
			'filename' => 'required|in:resumeSRM.docx,resumeSRM.pdf',
		];
	}


	/**
	 * return validation rules
	 * @access  private
	 * @return array
	 */
	private function getFileUploadValidationRules() {
		return [
			'fileToUpload' => 'required',
		];
	}

	/**
	 * Download a file
	 * @param        $contents
	 * @param string $filename
	 */
	private static function downloadFile($contents, string $filename) {
		// force download of the file
		header("Content-Type: application/octet-stream");
		header("Content-Disposition: attachment; filename={$filename}");
		echo $contents;
	}

}
