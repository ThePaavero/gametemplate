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
	// Remove the "Loading..." message
	$('#loading_javascript').remove();

	// Set a game ID
	game.id = 'default_game';

	// Canvas dimensions (in pixels)
	var canvas_width  = 650;
	var canvas_height = 400;

	// Create our "modules"
	var canvas = new game.canvas(canvas_width, canvas_height);
	var engine = new game.engine();

	// Introduce the game engine to its canvas (both object and DOM element)
	engine.set_canvas_object(canvas.get(true));
	engine.set_canvas_element(canvas.get);

	// TODO: ~everything

	// Now that the base is set up, include the specific game JS
	include(['game/game.js'], function()
	{
		// Check that it has a "run" method
		if(typeof game.run !== 'function')
		{
			// Sucks, bail
			throw new Error('You need to create a "run" method for the game object!');
			return;
		}

		// Let the custom game logic take over!
		game.run();
	});
}

// EOF