/**
 * Game Engine Module
 *
 * @author Pekka S.
 * @package JS Game Framework
 */

game.engine = function()
{
	var self = this;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	self.init = function()
	{
		log('Game Engine initiated');
	}

	/**
	 * Set canvas element
	 *
	 * @param {object} canvas_element DOM element object
	 * @return void
	 */
	self.set_canvas_element = function(canvas_element)
	{
		self.canvas = canvas_element;
	}

	/**
	 * Set canvas object
	 *
	 * @param {object} canvas_object Canvas object ("class", not DOM element)
	 * @return void
	 */
	self.set_canvas_object = function(canvas_object)
	{
		self.canvas_object = canvas_object;
	}

	/**
	 * Set canvas element's context
	 *
	 * @param {object} c Canvas element's Context object
	 */
	self.set_canvas_context = function(c)
	{
		self.c = c;
	}

	/**
	 * This is what happens for each "frame" inside our canvas
	 *
	 * @return void
	 */
	self.update = function()
	{
		self.canvas_object.clear();

		if(typeof game.main.game_frame !== 'function')
		{
			// We have nothing to do
			throw new Error('Engine has no game_frame method to run!');
			return;
		}

		// Let the game logic tell us what else to do on each "frame"
		game.main.game_frame();
	}

	/**
	 * Stop game
	 *
	 * @return void
	 */
	self.stop = function()
	{
		if(self.running)
		{
			clearInterval(self.running);
		}
	}

	/**
	 * Run "frames" inside our canvas
	 *
	 * @return void
	 */
	self.run = function()
	{
		self.stop();

		game.id = game.conf.game_name;

		self.running = setInterval(function()
		{
			self.update();
		}, game.conf.frame_delay);

		log('Game "' + game.id + '" is now running.');
	}

	// Run constructor
	self.init();
}

// EOF