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
	$.__views.instructions = A$(Ti.UI.createWindow(
{backgroundColor:"#000",backgroundImage:"/images/woodbg.png",id:"instructions",title:"Instructions",}
),'Window', null);
$.addTopLevelView($.__views.instructions);$.__views.__alloyId2 = A$(Ti.UI.createLabel(
{text:'Controls',id:"__alloyId2",}
),'Label', $.__views.instructions);
$.__views.instructions.add($.__views.__alloyId2);
$.__views.back = A$(Ti.UI.createButton(
{top:"10dp",left:"10dp",backgroundImage:"/images/backicon.png",height:40,width:40,id:"back",title:"",}
),'Button', $.__views.instructions);
$.__views.instructions.add($.__views.back);
backToHome?$.__views.back.on('click',backToHome):__defers['$.__views.back!click!backToHome']=true;exports.destroy=function(){};

	// make all IDed elements in $.__views available right on the $ in a 
	// controller's internal code. Externally the IDed elements will
	// be accessed with getView().
	_.extend($, $.__views);

	// Controller code directly from the developer's controller file
	function backToHome(){Ti.API.info("close window");$.instructions.close()}

	// Generated code that must be executed after all UI and
	// controller code. One example deferred event handlers whose
	// functions are not defined until after the controller code
	// is executed.
	__defers['$.__views.back!click!backToHome'] && $.__views.back.on('click',backToHome);

	// Extend the $ instance with all functions and properties 
	// defined on the exports object.
	_.extend($, exports);
}

module.exports = Controller;