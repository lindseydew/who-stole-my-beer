//function doClick(e) {  
//    alert($.label.text);
//}

var data = require('game-engine');

$.index.open();

function openPlayWin (){
	Ti.API.info('open play window')
	var controller = Alloy.createController('game');
	var win = controller.getView();
	win.open();
	initialiseGame = data.StartNewGame();
	
}

function openInstructionsWin (){
	Ti.API.info('open instruction window')
	var controller = Alloy.createController('instructions');
	var win = controller.getView();
	win.open();
}

function openAboutWin (){
	Ti.API.info('open about window')
	var controller = Alloy.createController('about');
	var win = controller.getView();
	win.open();
}

function openLeaderboardWin (){
	Ti.API.info('open leaderboard window')
	var controller = Alloy.createController('leaderboard');
	var win = controller.getView();
	win.open();
}

