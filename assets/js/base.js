/**
 * Base JS
 *
 * Consists of some helper functions + the main onload initializations
 *
 * @author Pekka S.
 * @package JS Game Framework
 */

// Helper functions below

/**
 * Log to console (pretty much just a shortcut for console.log())
 *
 * @param  {string} msg Message to log
 * @return void
 */
function log(msg)
{
	console.log(msg);
}

/**
 * Include a JS file.
 * Provides a callback possibility.
 *
 * @param  {array}    paths    Paths of JS files (root is set to /assets/js/)
 * @param  {function} callback Function to call when all files have loaded
 * @return void
 */
function include(paths, callback)
{
	var root = _root;
		root = root + 'assets/js/';

	var files_loaded = 0;
	var amount_of_scripts = paths.length;

	for(var i in paths)
	{
		var full_path = root + paths[i];

		var s = document.createElement('script');
			s.src = full_path;

		document.getElementsByTagName('head')[0].appendChild(s);

		s.onload = function()
		{
			files_loaded ++;

			if(files_loaded === amount_of_scripts)
			{
				// All files are done loading
				log('Files done loading (' + amount_of_scripts + ' files)');

				if(typeof callback === 'function')
				{
					callback();
				}
			}
		};
	}
}

// Initialization below

/**
 * On document ready, start the whole show
 *
 * @return void
 */
$(function()
{
	// Include all common framework/boilerplate functionalities
	include(['index.js'], function()
	{
		// Then, when that's loaded, include the specific game JS
		include(['game/game.js'], function()
		{
			// Check that it has a "start" method
			if(typeof game.start !== 'function')
			{
				// Sucks, bail
				throw new Error('You need to create a start method for the game object!');
				return;
			}

			// Let the custom game logic take over!
			game.start();
		});
	});
});

// EOF