/**
 * Shooter!
 */

game.shooter = function(g)
{
	var self = this;

	self.g = g; // The framework
	self.c = g.canvas.context; // Canvas context

	self.init = function()
	{
		// Create our player
		self.p = new game.shooter.player();

		// Controls for player
		self.kb = new Keyboard_module();
		self.kb.link('left',  function(){ self.p.move('left'); });
		self.kb.link('right', function(){ self.p.move('right'); });
		self.kb.link('up',    function(){ self.p.jump(); });
		self.kb.link('down',  function(){ self.p.crouch(); }, function(){ self.p.stand_up(); });
	}

	self.per_frame = function()
	{
		// Player
		self.c.drawImage(
							self.p.element,  // Image
							self.p.sprite_x, // sourceX
							self.p.sprite_y, // sourceY
							self.p.width,    // sourceWidth
							self.p.height,   // sourceHeight
							self.p.coords.x, // destX
							self.p.coords.y, // destY
							self.p.width,    // destWidth
							self.p.height    // destHeight
						);
	}
}

// EOF