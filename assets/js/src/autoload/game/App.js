Game.App = function() {

	var canvas;
	var context;

	this.init = function()
	{
		console.log('Game starting...');
	};

	this.setCanvas = function(_canvas)
	{
		canvas  = _canvas;
		context = canvas.getContext('2d');
	};

};
