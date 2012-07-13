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
		game.conf.game_name   = 'shooter';

		self.g = {};

		include(['game/shooter/shooter.js'], function()
		{
			self.g = new game.shooter(game);
			include(['game/shooter/player.js'], function()
			{
				self.g.init();
				game.engine.run();
			});
		});
	}

	self.game_frame = function()
	{
		self.g.per_frame();
	}

	self.start();
}

// EOF