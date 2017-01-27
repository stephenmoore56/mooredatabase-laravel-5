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

	/**
	 * Download resume file from S3
	 * @access public
	 * @param Request $request
	 * @return mixed
	 */
	public function downloadResume(Request $request) {

		// validation rules
		$rules = $this->getValidationRules();

		// validate data using rules
		$this->validate($request, $rules);

		// get filename
		$filename = $request->input('filename');

		// download
		try {
			// get file contents
			$result = S3Mapper::getFile($filename);

			// force download of the file
			header("Content-Type: application/octet-stream");
			header("Content-Disposition: attachment; filename={$filename}");
			echo $result['Body'];

			// next statement will NOT execute
			return redirect('/');

		} catch (\Exception $e) {
			$flashMessage = 'An error occurred. ' . $e->getMessage();
			return redirect('/')->with('flashMessage', $flashMessage);
		}

	}

	/**
	 * return validation rules
	 * @access  private
	 * @return array
	 */
	private function getValidationRules() {
		return [
			'filename' => 'required|in:resumeSRM.docx,resumeSRM.pdf',
		];
	}

}
