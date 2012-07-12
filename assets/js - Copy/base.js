/**
 * Base JS
 */

function log(msg)
{
	console.log(msg);
}

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
				if(typeof callback === 'function')
				{
					log('Files done loading');
					callback();
				}
			}
		}
	}

}

$(function()
{
	include(['index.js']);
});

// EOF