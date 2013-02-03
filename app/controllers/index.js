//function doClick(e) {  
//    alert($.label.text);
//}

$.index.open();

function openPlayWin (){
	Ti.API.info('open play window')
	var controller = Alloy.createController('game');
	var win = controller.getView();
	win.open();
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

/*
// load the build.json
var fileName = 'build.json';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);
 
if (file.exists()) {
  var dataSrc = Ti.Platform.osname==='android'? ''+file.read():file.read();
  buildData = JSON.parse(dataSrc); 
}
*/