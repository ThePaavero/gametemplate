/**
 * Player object
 */

game.shooter.player = function()
{
	log('Created player');

	var self = this;

	// Initial posture
	self.posture = 'standing';

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
		self.posture = 'standing';
		log('Stands up');
	}
}

// EOF