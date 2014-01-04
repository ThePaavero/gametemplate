window.Game = {};

Game.App        = {};
Game.Components = {};
Game.Helpers    = {};

/**
 * The entire "framework"
 * @return void
 */
$(function()
{
	var game = new Game.App();

	var gameLoop = function()
	{
		game.onFrame();
		requestAnimationFrame(gameLoop);
	};

	// -----------------------------------------------------------------------

	var canvas = $('#game > canvas');

	canvas.attr('width', canvas.width());
	canvas.attr('height', canvas.height());

	game.setCanvas(canvas[0]);
	game.init();

	window.gameGlobal = game;

	gameLoop();
});
