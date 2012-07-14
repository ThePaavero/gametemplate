/**
 * Player object
 */

game.shooter.player = function()
{
	log('Creating player...');

	var self = this;

	// Create our sprite thing
	self.element = new Image();
	self.element.src = _root + 'assets/img/smw_mario_sheet.png';
	// game.canvas.context.drawImage(self.element,srcX,srcY,srcW,srcH,destX,destY,destW,destH);
	// game.canvas.context.drawImage(self.element, 0, 0);

	// Initial posture
	self.posture = 'standing';

	self.coords = {};

	// Initial position
	self.coords.x = 80;
	self.coords.y = 80;

	// Dimensions
	self.width    = 45;
	self.height   = 35;

	self.sprite_x = 115;
	self.sprite_y = 0;

	/**
	 * Action move
	 *
	 * @param  {string} direction 'left' or 'right'
	 * @return void
	 */
	self.move = function(direction)
	{
		log('Player moving to the ' + direction);
	}

	/**
	 * Action jump
	 *
	 * @return void
	 */
	self.jump = function()
	{
		if(self.posture === 'jumping')
		{
			// We're already in the air
			return;
		}

		self.posture = 'jumping';
		log('Player jumps!');

		// TODO: Actual jumping
	}

	/**
	 * Action crouch
	 *
	 * @return void
	 */
	self.crouch = function()
	{
		if(self.posture === 'jumping' || self.posture === 'crouching')
		{
			// We're in the air or already crouching, can't crouch from here
			return;
		}

		self.posture = 'crouching';
		log('Player crouches');
	}

	/**
	 * Action stand up
	 *
	 * @return void
	 */
	self.stand_up = function()
	{
		if(self.posture !== 'crouching')
		{
			// Can't "stand up" unless we're crouching
			return;
		}

		self.posture = 'standing';
		log('Stands up');
	}
}

// EOF