/**
 * Game JS
 *
 * The important thing is the game object (do "log(game);" to see)
 */

game.run = function(base)
{
	var self = this;

	self.base = base;

	self.init = function()
	{
		log('Game "' + self.id + '" is running and initializing...');
	}

	self.init();
}

// EOF