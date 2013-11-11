window.Game = {};

Game.App     = {};
Game.Modules = {};
Game.Helpers = {};

$(function()
{
	var game = new Game.App();

	var canvas = $('#game > canvas');
	game.setCanvas(canvas[0]);
	game.init();

	window.gameGlobal = game;
});
