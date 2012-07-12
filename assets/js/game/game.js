/**
 * Game JS
 *
 * The important thing is the game object (do "log(self);" to see)
 */

game.run = function()
{
	var self = this;

	self.init = function()
	{
		log('Game "' + self.id + '" is running and initializing...');
	}

	self.init();
}

// EOF