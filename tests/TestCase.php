<?php

abstract class TestCase extends Illuminate\Foundation\Testing\TestCase
{
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

	public function assertClassExists($className) {
		return $this->assertTrue(class_exists($className),
			'Class ' . $className . ' does not exist.');
	}
	/**
	 * @param  $className
	 * @param  $methodName
	 * @return boolean
	 */
	public function assertClassHasMethod($className, $methodName) {
		return $this->assertTrue(method_exists($className, $methodName),
			'Class ' . $className . ' has no method ' . $methodName . '.');
	}
}
