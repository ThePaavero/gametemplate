/**
 * Game JS
 *
 * The important thing is the game object (do "log(game);" to see)
 */

game.main = function()
{
	var self = this;

	self.start = function()
	{
		// Override config vars
		game.conf.frame_delay = 1;
		game.conf.game_name   = 'my_game';

		// Start game with new config values in place
		game.engine.run();
	}

	self.game_frame = function()
	{
		log('Frame');
	}

	self.start();
}

// EOF