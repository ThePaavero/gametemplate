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
	 * Run "frames" inside our canvas
	 *
	 * @return void
	 */
	self.run = function()
	{
		setInterval(function()
		{
			self.canvas_object.update();
		}, 1);
	}

	/**
	 * This is what happens for each "frame" inside our canvas
	 *
	 * @return void
	 */
	self.update = function()
	{
		self.canvas_object.clear();

		// Todo: Stuff to do on each frame!
	}


	// Run constructor
	self.init();
}

// EOF