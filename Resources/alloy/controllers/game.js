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
	$.__views.game = A$(Ti.UI.createWindow(
{backgroundColor:"#000",backgroundImage:"/images/woodbg.png",id:"game",}
),'Window', null);
$.addTopLevelView($.__views.game);$.__views.gameView = A$(Ti.UI.createView(
{top:"20dp",height:"300dp",backgroundColor:"#ff0",width:"80%",id:"gameView",}
),'View', $.__views.game);
$.__views.game.add($.__views.gameView);
hideAnimation?$.__views.gameView.on('click',hideAnimation):__defers['$.__views.gameView!click!hideAnimation']=true;$.__views.infoBar = A$(Ti.UI.createView(
{bottom:0,height:"60dp",backgroundColor:"#ff0",id:"infoBar",}
),'View', $.__views.game);
$.__views.game.add($.__views.infoBar);
$.__views.clue = A$(Ti.UI.createView(
{bottom:0,height:"60dp",backgroundColor:"#369",width:"80%",right:0,id:"clue",}
),'View', $.__views.infoBar);
$.__views.infoBar.add($.__views.clue);
$.__views.timer = A$(Ti.UI.createView(
{bottom:0,height:"60dp",backgroundColor:"#523",width:"80%",left:0,id:"timer",}
),'View', $.__views.infoBar);
$.__views.infoBar.add($.__views.timer);
$.__views.mask = A$(Ti.UI.createView(
{id:"mask",}
),'View', $.__views.timer);
$.__views.timer.add($.__views.mask);
$.__views.visualTimer = A$(Ti.UI.createView(
{id:"visualTimer",}
),'View', $.__views.timer);
$.__views.timer.add($.__views.visualTimer);
exports.destroy=function(){};

	// make all IDed elements in $.__views available right on the $ in a 
	// controller's internal code. Externally the IDed elements will
	// be accessed with getView().
	_.extend($, $.__views);

	// Controller code directly from the developer's controller file
	function hideAnimation(){Ti.API.info("hide animation");var gameView=Alloy.createController("gameView").getView();gameView.animate({view:gameView,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT})}

	// Generated code that must be executed after all UI and
	// controller code. One example deferred event handlers whose
	// functions are not defined until after the controller code
	// is executed.
	__defers['$.__views.gameView!click!hideAnimation'] && $.__views.gameView.on('click',hideAnimation);

	// Extend the $ instance with all functions and properties 
	// defined on the exports object.
	_.extend($, exports);
}

module.exports = Controller;