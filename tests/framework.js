
casper.test.begin('Making sure the very basics are fine', 1, function suite(test)
{
	casper.start('http://localhost/games/framework/', function()
	{
		//
	});

	casper.then(function()
	{
		//
	});

	casper.run(function()
	{
		test.done();
	});
});
