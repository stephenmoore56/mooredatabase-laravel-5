<?php
declare(strict_types = 1);
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
	 * get an array of S3 buckets
	 * @return array
	 */
	public static function getBuckets(): array {
		$s3 = self::getS3Client();
		$result = $s3->listBuckets();
		return $result['Buckets'];
	}

	/**
	 * Get object in a bucket
	 * @param string $bucket
	 * @return \Iterator
	 */
	public static function getObjects(string $bucket) {
		$s3 = self::getS3Client();
		$objects = $s3->getIterator('ListObjects', array('Bucket' => $bucket));
		return $objects;
	}

	/**
	 * Get an object
	 * @param string $bucket
	 * @param string $key
	 * @return \Aws\Result
	 */
	public static function getObject(string $bucket, string $key) {
		$s3 = self::getS3Client();
		// Get the object
		$result = $s3->getObject(array(
			'Bucket' => $bucket,
			'Key'    => $key,
		));
		return $result;
	}

	public static function deleteObject(string $bucket, string $key) {
		$s3 = self::getS3Client();
		// delete the object
		$result = $s3->deleteObject(array(
			'Bucket' => $bucket,
			'Key'    => $key,
		));
		return $result;
	}

	/**
	 * Upload a file to S3
	 * @param string $bucket
	 * @param string $key
	 * @param string $sourceFile
	 * @return \Aws\Result
	 */
	public static function putObject(string $bucket, string $key, string $sourceFile) {
		$s3 = self::getS3Client();
		// upload the object
		$result = $s3->putObject(array(
			'Bucket'     => $bucket,
			'Key'        => $key,
			'SourceFile' => $sourceFile,
		));
		return $result;
	}

	/**
	 * get an instance of the S3 client
	 * @return S3Client
	 */
	private static function getS3Client(): S3Client {
		// Instantiate the client.
		return new S3Client([
			'profile' => 'default',
			'region'  => 'us-east-1',
			'version' => '2006-03-01',
		]);
	}
}