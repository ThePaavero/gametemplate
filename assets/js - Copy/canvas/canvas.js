/**
 * Canvas JS
 */

if(typeof game === 'undefined')
{
	log('Canvas.js: No game object present!');
}

game_modules.canvas = function()
{
	var self = this;

	self.init = function()
	{
		log('* game_canvas initiated');
	}

	self.init();
}

// EOF