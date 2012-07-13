/**
 * Index.js
 *
 * @author Pekka S.
 * @package JS Game Framework
 */

/**
 * Only two names in the global namespace:
 * - "game" (base object that everything should be connected to)
 * - "game_init", static function below
 *
 * Don't create more, please.
 */

// Create our base object/namespace
var game = {};

// Include JS files that create methods/objects to our game object
include([
	'canvas/canvas.js',
	'engine/engine.js'
], function()
{
	// Done loading, initialize!
	game_init();
});

/**
 * Initialize (create, build, etc.) game, the base logic is to be found here
 *
 * @return void
 */
function game_init()
{
	// Grab the global "game" object and assign it to "g" for less syntax
	// game = new game();
	var g = game;

	// Configuration values
	g.conf = {};
	g.conf.frame_delay = 1; // As fast as possible
	g.conf.game_name   = 'default_game'; // Default name
	g.conf.width       = 650; // Canvas width (in pixels)
	g.conf.height      = 400; // Canvas height (in pixels)

	// Now that the base is set up, include the specific game JS
	include(['game/game.js'], function()
	{

		// Remove the "Loading..." message
		remove(document.getElementById('loading_javascript'));

		// Check that our game object has been given a "main" method/object
		if(typeof g.main !== 'function')
		{
			// Nope, sucks, bail
			throw new Error('You need to create a "main" method for the game object!');
			return;
		}

		// Create our "modules"
		g.canvas = new g.canvas(g.conf.width, g.conf.height);
		g.engine = new g.engine();
		g.main   = new g.main();

		// Introduce the game engine to its canvas
		// (both object and DOM element as well as context of DOM element)
		g.engine.set_canvas_object(g.canvas.get(true));
		g.engine.set_canvas_element(g.canvas.get);
		g.engine.set_canvas_context(g.canvas.get_context());
	});
}

// EOF