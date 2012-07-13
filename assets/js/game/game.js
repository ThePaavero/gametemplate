/**
 * Game JS
 *
 * The important thing is the game object (do "log(game);" to see)
 */

game.main = function()
{
	var self = this;

	// Make a shortcut to our canvas context
	self.c = game.canvas.context;

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
		// Draw something onto our canvas
		self.c.textBaseline = 'top';
		self.c.font         = "30px sans-serif";
		self.c.fillText('My Game', 8, 5);
	}

	self.start();
}

// EOF