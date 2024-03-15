<?php

use WP_Mock\Tools\TestCase as TestCase;

class JobsTest extends TestCase
{
    public function testRegister(): void
    {
        $jobs = new App\Providers\PostTypes\Jobs('');

        WP_Mock::expectActionAdded('init', [$jobs, 'registerPostType']);

        $jobs->register();
        $this->assertConditionsMet();

    }

    public function testRegisterPostType(): void
    {
        $jobs = new App\Providers\PostTypes\Jobs('');

        WP_Mock::userFunction('register_post_type', [
            'times' => 1,
            'args'  => ['Job', $jobs->args()],
        ]);

        $jobs->registerPostType();
        $this->assertConditionsMet();

    }

    public function testArgs()
    {
        $jobs = new App\Providers\PostTypes\Jobs('');

        $result = $jobs->args();
        $this->assertIsArray($result);

    }

    public function testLabels()
    {
        $jobs = new App\Providers\PostTypes\Jobs('');

        $result = $jobs->args();
        $this->assertIsArray($result);

    }
}
