/**
 * Game Canvas Module
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
		self.el        = document.createElement('canvas');
		self.el.id     = game.id + '_canvas';
		self.context   = self.el.getContext('2d');

		if(document.getElementById('container'))
		{
			document.getElementById('container').appendChild(self.el);
		}
		else
		{
			document.body.appendChild(self.el);
		}
	}

	/**
	 * Set CSS dimensions for our canvas element
	 *
	 * @return void
	 */
	self.set_dimensions = function()
	{
		self.el.width  = self.width;
		self.el.height = self.height;

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

	/**
	 * Get my context(2d) property
	 *
	 * @return Object property
	 */
	self.get_context = function()
	{
		return self.context;
	}

	/**
	 * Clear the canvas (the engine will call upon this between its "frames")
	 *
	 * @return void
	 */
	self.clear = function()
	{
		// Store the current transformation matrix
		self.context.save();

		// Use the identity matrix while clearing the canvas
		self.context.setTransform(1, 0, 0, 1, 0, 0);
		self.context.clearRect(0, 0, self.width, self.height);

		// Restore the transform
		self.context.restore();
	};

	// Run constructor
	self.init();
}

// EOF