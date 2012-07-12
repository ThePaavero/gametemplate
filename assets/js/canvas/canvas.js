/**
 * Canvas Module
 *
 * @author Pekka S.
 * @package JS Game Framework
 */

game.canvas = function(width, height)
{
	var self = this;

	self.width  = width;
	self.height = height;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	self.init = function()
	{
		self.spawn();
		self.set_dimensions();
		log('Canvas initiated (' + self.width + 'x' + self.height + ').');
	}

	/**
	 * Create canvas element, give it an ID and append it to DOM
	 *
	 * @return void
	 */
	self.spawn = function()
	{
		self.el = document.createElement('canvas');
		self.el.id = game.id + '_canvas';
		document.body.appendChild(self.el);
	}

	/**
	 * Set CSS dimensions for our canvas element
	 *
	 * @return void
	 */
	self.set_dimensions = function()
	{
		$(self.el).css({
			width  : self.width,
			height : self.height
		});
	}

	/**
	 * Get either our whole object or just the canvas DOM element.
	 * Defaults to returning just the canvas DOM element.
	 *
	 * @param  {boolean} return_object Return the whole object?
	 * @return {object}                Either whole object or canvas DOM element
	 */
	self.get = function(return_object)
	{
		if(return_object === true)
		{
			return self;
		}

		return self.el;
	}

	// Run constructor
	self.init();
}

// EOF