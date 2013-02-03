var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	A$ = Alloy.A,
	$model;



function Controller() {
	require('alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	
	$model = arguments[0] ? arguments[0]['$model'] : null;
	var $ = this;
	var exports = {};
	var __defers = {};
	
	// Generated code that must be executed before all UI and/or
	// controller code. One example is all model and collection 
	// declarations from markup.
	

	// Generated UI code
	$.__views.index = A$(Ti.UI.createWindow(
{backgroundColor:"#000",backgroundImage:"/images/woodbg.png",barColor:"#369",title:"Tab 1",id:"index",}
),'Window', null);
$.addTopLevelView($.__views.index);$.__views.play = A$(Ti.UI.createButton(
{top:"80dp",backgroundImage:"/images/playgame.png",width:300,height:60,id:"play",title:"",}
),'Button', $.__views.index);
$.__views.index.add($.__views.play);
openPlayWin?$.__views.play.on('click',openPlayWin):__defers['$.__views.play!click!openPlayWin']=true;$.__views.instructions = A$(Ti.UI.createButton(
{top:"160dp",backgroundImage:"/images/controls.png",width:300,height:60,id:"instructions",title:"",}
),'Button', $.__views.index);
$.__views.index.add($.__views.instructions);
openInstructionsWin?$.__views.instructions.on('click',openInstructionsWin):__defers['$.__views.instructions!click!openInstructionsWin']=true;$.__views.about = A$(Ti.UI.createButton(
{top:"240dp",backgroundImage:"/images/about.png",width:300,height:60,id:"about",title:"",}
),'Button', $.__views.index);
$.__views.index.add($.__views.about);
openAboutWin?$.__views.about.on('click',openAboutWin):__defers['$.__views.about!click!openAboutWin']=true;$.__views.leaderbaord = A$(Ti.UI.createButton(
{top:"320dp",backgroundImage:"/images/leaderboard.png",width:300,height:60,id:"leaderbaord",title:"",}
),'Button', $.__views.index);
$.__views.index.add($.__views.leaderbaord);
openLeaderboardWin?$.__views.leaderbaord.on('click',openLeaderboardWin):__defers['$.__views.leaderbaord!click!openLeaderboardWin']=true;exports.destroy=function(){};

	// make all IDed elements in $.__views available right on the $ in a 
	// controller's internal code. Externally the IDed elements will
	// be accessed with getView().
	_.extend($, $.__views);

	// Controller code directly from the developer's controller file
	$.index.open();function openPlayWin(){Ti.API.info("open play window");var controller=Alloy.createController("game");var win=controller.getView();win.open()}function openInstructionsWin(){Ti.API.info("open instruction window");var controller=Alloy.createController("instructions");var win=controller.getView();win.open()}function openAboutWin(){Ti.API.info("open about window");var controller=Alloy.createController("about");var win=controller.getView();win.open()}function openLeaderboardWin(){Ti.API.info("open leaderboard window");var controller=Alloy.createController("leaderboard");var win=controller.getView();win.open()}

	// Generated code that must be executed after all UI and
	// controller code. One example deferred event handlers whose
	// functions are not defined until after the controller code
	// is executed.
	__defers['$.__views.play!click!openPlayWin'] && $.__views.play.on('click',openPlayWin);__defers['$.__views.instructions!click!openInstructionsWin'] && $.__views.instructions.on('click',openInstructionsWin);__defers['$.__views.about!click!openAboutWin'] && $.__views.about.on('click',openAboutWin);__defers['$.__views.leaderbaord!click!openLeaderboardWin'] && $.__views.leaderbaord.on('click',openLeaderboardWin);

	// Extend the $ instance with all functions and properties 
	// defined on the exports object.
	_.extend($, exports);
}

module.exports = Controller;