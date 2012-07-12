/**
 * Index.js
 */

var game_modules = function(){};

var game = function() {

	var self = this;

	self.modules = new game_modules();

	self.init = function()
	{
		include([
		'canvas/canvas.js'
		], function()
		{
			self.modules.canvas = new self.modules.canvas();
			log(self);
		});
	}
};

$(function()
{
	var g = new game();
	g.init();
});

// EOF