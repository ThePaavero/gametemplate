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
	var g = game;

	// TODO: ~everything!

	// Now that the base is set up, include the specific game JS
	include(['game/game.js'], function()
	{

		// Remove the "Loading..." message
		$('#loading_javascript').remove();

		// Set a game ID
		g.id = 'default_game';

		// Canvas dimensions (in pixels)
		g.canvas_width  = 650;
		g.canvas_height = 400;

		// Check that our game object has been given a "main" method/object
		if(typeof g.main !== 'function')
		{
			// Nope, sucks, bail
			throw new Error('You need to create a "main" method for the game object!');
			return;
		}

		// Create our "modules"
		g.canvas = new g.canvas(g.canvas_width, g.canvas_height);
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