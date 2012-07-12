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

	// Run constructor
	self.init();
}

// EOF