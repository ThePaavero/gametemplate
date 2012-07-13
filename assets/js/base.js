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
 * Remove element from DOM
 *
 * @param  {object} element HTML Element
 * @return void
 */
function remove(element)
{
    element.parentNode.removeChild(element);
}

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

var Keyboard_module = function()
{
	var self = this;

	self.keys = {
	    'backspace': 8,
	    'tab': 9,
	    'enter': 13,
	    'shift': 16,
	    'ctrl': 17,
	    'alt': 18,
	    'pause': 19,
	    'capslock': 20,
	    'esc': 27,
	    'pageup': 33,
	    'pagedown': 34,
	    'end': 35,
	    'home': 36,
	    'left': 37,
	    'up': 38,
	    'right': 39,
	    'down': 40,
	    'insert': 45,
	    'delete': 46,
	    '0': 48,
	    '1': 49,
	    '2': 50,
	    '3': 51,
	    '4': 52,
	    '5': 53,
	    '6': 54,
	    '7': 55,
	    '8': 56,
	    '9': 57,
	    'a': 65,
	    'b': 66,
	    'c': 67,
	    'd': 68,
	    'e': 69,
	    'f': 70,
	    'g': 71,
	    'h': 72,
	    'i': 73,
	    'j': 74,
	    'k': 75,
	    'l': 76,
	    'm': 77,
	    'n': 78,
	    'o': 79,
	    'p': 80,
	    'q': 81,
	    'r': 82,
	    's': 83,
	    't': 84,
	    'u': 85,
	    'v': 86,
	    'w': 87,
	    'x': 88,
	    'y': 89,
	    'z': 90,
	    '0numpad': 96,
	    '1numpad': 97,
	    '2numpad': 98,
	    '3numpad': 99,
	    '4numpad': 100,
	    '5numpad': 101,
	    '6numpad': 102,
	    '7numpad': 103,
	    '8numpad': 104,
	    '9numpad': 105,
	    'multiply': 106,
	    'plus': 107,
	    'minus': 109,
	    'dot': 110,
	    'slash1': 111,
	    'f1': 112,
	    'f2': 113,
	    'f3': 114,
	    'f4': 115,
	    'f5': 116,
	    'f6': 117,
	    'f7': 118,
	    'f8': 119,
	    'f9': 120,
	    'f10': 121,
	    'f11': 122,
	    'f12': 123,
	    'equal': 187,
	    'coma': 188,
	    'slash': 191,
	    'backslash': 220
	}

	this.link = function(obj_key, func_on, func_off)
	{
		var my_keycode = eval('self.keys.' + obj_key);

		$(document).keydown(function(e)
		{
			if(e.keyCode == my_keycode)
			{
				if(typeof func_on === 'function')
				{
					func_on();
				}
			}
		});

		$(document).keyup(function(e)
		{
			if(e.keyCode == my_keycode)
			{
				if(typeof func_off === 'function')
				{
					func_off();
				}
			}
		});
	}
}

// Initialization below

/**
 * On document ready, start the whole show
 *
 * @return void
 */
window.onload = function()
{
	// Include all common framework/boilerplate functionalities and go from there...
	include(['index.js']);
}

// EOF