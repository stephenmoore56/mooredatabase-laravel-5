<?php
declare(strict_types=1);
/**
 * S3 mapper
 *
 * @package  Mappers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 *  S3Mapper class
 *
 */
namespace App\Http\Mappers;

use Aws\S3\S3Client;

class S3Mapper {

	/**
	 * get file from S3
	 * @param string $filename
	 * @return mixed
	 */
	public static function getFile(string $filename) {

		$keyname = $filename;
		$bucket = 'mooredatabase_documents';

		// Instantiate the client.
		$s3 = new S3Client([
			'profile' => 'default',
			'region'  => 'us-east-1',
			'version' => '2006-03-01'
		]);

		// Get the object
		$result = $s3->getObject(array(
			'Bucket' => $bucket,
			'Key'    => $keyname
		));

		return $result;
	}

}
