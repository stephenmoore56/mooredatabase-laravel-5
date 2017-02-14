<?php

use App\Http\Controllers\ReportsController;

class ReportsControllerTest extends TestCase
{

	const REPORT_CONTROLLER = 'App\Http\Controllers\ReportsController';

    /**
     * Test whether views all respond OK
     * @access public
     * @dataProvider providerReportEndpoints
     * @param string $endpoint HTTP endpoint
     */
    public function testReportEndpointsOK($endpoint)
    {
        $this->call('GET', $endpoint);
        $this->assertResponseOk();
    }

    /**
     * Data provider for testReportEndpointsOK()
     * @access public
     */
    public static function providerReportEndpoints()
    {
        return [
            ['/reports/months'],
            ['/reports/years'],
            ['/reports/orders'],
            ['/reports/locations'],
            ['/reports/months/4'],
            ['/reports/orders/14'],
            ['/reports/locations/12'],
            ['/reports/species/1343'],
            ['/reports/all'],
            ['/reports/search'],
            ['/reports/birdLookup?query=striped'],
        ];
    }

    /**
     * Test whether cache clear method redirects to root (302 response); note, you must
	 * be authenticated for this test to pass; log on then run tests
     * @access public
     * @covers ReportsController::clearCache
     */
    public function testClearCache()
    {
		$this->assertClassExists(self::REPORT_CONTROLLER);
        $this->assertClassHasMethod(self::REPORT_CONTROLLER, 'clearCache');
        $this->call('GET', '/reports/clearCache');
        $this->assertRedirectedTo('/');
    }

}
