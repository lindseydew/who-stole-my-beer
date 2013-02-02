//function doClick(e) {  
//    alert($.label.text);
//}

$.index.open();

function openPlayWin (){
	Ti.API.info('open play window')
	var controller = Alloy.createController('window2');
	var win = controller.getView();
	win.open();
}

function openInstructionsWin (){
	Ti.API.info('open instruction window')
	var controller = Alloy.createController('window2');
	var win = controller.getView();
	win.open();
}

function openAboutWin (){
	Ti.API.info('open about window')
	var controller = Alloy.createController('window2');
	var win = controller.getView();
	win.open();
}

function openLeaderboardWin (){
	Ti.API.info('open leaderboard window')
	var controller = Alloy.createController('window2');
	var win = controller.getView();
	win.open();
}

