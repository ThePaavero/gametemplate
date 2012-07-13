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
				   // context.drawImage(self.element,srcX,srcY,srcW,srcH,destX,destY,destW,destH);
		self.g.canvas.context.drawImage(self.p.element, self.p.coords.x, self.p.coords.y);
	}
}

// EOF