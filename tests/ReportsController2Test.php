<?php

class ReportsController2Test extends TestCase {

	const REPORT_CONTROLLER = 'App\Http\Controllers\ReportsController';

	/**
	 * Special test module for AJAX lookups
	 */

	/**
	 * @var mixed
	 */
	protected $client;

	/**
	 * See http://stackoverflow.com/
	 * questions/26710631/laravel-framework-classes-not-available-in-phpunit-data-provider
	 * @param $name
	 * @param array $data
	 * @param $dataName
	 */
	public function __construct($name = null, array $data = [], $dataName = '') {
		parent::__construct($name, $data, $dataName);
		$this->createApplication();
	}

	/**
	 * Setup method for tests
	 * @access public
	 */
	public function setUp() {
		// create our http client (Guzzle)
		$this->client = new GuzzleHttp\Client([
			'base_uri' => 'http://localhost:8000',
		]);
	}

	/**
	 * Tear down method for tests
	 * @access public
	 */
	public function tearDown() {
		unset($this->client);
	}

	/**
	 * test birdLookup method
	 * @access  public
	 * @dataProvider providerBirdLookup
	 * @covers       ReportsController::birdLookup
	 */
	public function testBirdLookup($searchString) {

		$this->assertClassHasMethod(self::REPORT_CONTROLLER, 'birdLookup');
		$response = $this->client->request('GET', '/reports/birdLookup?query=' . $searchString);
		$this->assertEquals(200, $response->getStatusCode());
		$this->assertEquals('application/json', $response->getHeaderLine('content-type'));

		// test for fields in response
		$data = json_decode($response->getBody(true), true);
		$this->assertTrue(count($data) > 0);
		foreach ($data as $values) {
			$this->assertArrayHasKey('label', $values);
			$this->assertArrayHasKey('value', $values);
		}

		// test for correct types of fields
		foreach ($data as $values) {
			$this->assertInternalType('string', $values['label']);
			$this->assertInternalType('integer', $values['value']);
		}
	}

	/**
	 * Data provider for bird lookup test
	 * @return  Array of Arrays
	 */
	public static function providerBirdLookup() {
		$data = [
			['red-winged'],
			['hairy'],
			['downy'],
		];
		return $data;
	}

}
