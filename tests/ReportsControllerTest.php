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
            ['/reports/speciesByMonth'],
            ['/reports/speciesByYear'],
            ['/reports/speciesByOrder'],
            ['/reports/speciesByLocation'],
            ['/reports/speciesForMonth/4'],
            ['/reports/speciesForOrder/14'],
            ['/reports/speciesForLocation/12'],
            ['/reports/speciesDetail/1343'],
            ['/reports/speciesAll'],
            ['/reports/searchAll'],
            ['/reports/birdLookup'],
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

    /**
     * Test of speciesForMonth
     * @access public
     * @covers ReportsController::speciesForMonth
     */
    public function testSpeciesForMonth()
    {
        $this->assertClassHasMethod(self::REPORT_CONTROLLER, 'speciesForMonth');
        $this->call('GET', '/reports/speciesForMonth/4');
        $this->assertViewHas('monthNumber', 4);
    }

    /**
     * Test of speciesForOrder
     * @access public
     * @covers ReportsController::speciesForOrder
     */
    public function testSpeciesForOrder()
    {
        $this->assertClassHasMethod(self::REPORT_CONTROLLER, 'speciesForOrder');
        $this->call('GET', '/reports/speciesForOrder/14');
        $this->assertViewHas('orderId', 14);
    }

    /**
     * Test of speciesForLocation
     * @access public
     * @covers ReportsController::speciesForLocation
     */
    public function testSpeciesForLocation()
    {
        $this->assertClassHasMethod(self::REPORT_CONTROLLER, 'speciesForLocation');
        $this->call('GET', '/reports/speciesForLocation/12');
        $this->assertViewHas('locationId', 12);
    }

    /**
     * Test of speciesDetail
     * @access public
     * @covers ReportsController::speciesDetail
     */
    public function testSpeciesDetail()
    {
        $this->assertClassHasMethod(self::REPORT_CONTROLLER, 'speciesDetail');
        $this->call('GET', '/reports/speciesDetail/1343');
        $this->assertViewHas('speciesId', 1343);
    }
}
