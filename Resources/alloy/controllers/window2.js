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
	$.__views.window2 = A$(Ti.UI.createWindow(
{backgroundColor:"white",id:"window2",}
),'Window', null);
$.addTopLevelView($.__views.window2);$.__views.__alloyId4 = A$(Ti.UI.createLabel(
{text:"gfsfdgsdfg",id:"__alloyId4",}
),'Label', $.__views.window2);
$.__views.window2.add($.__views.__alloyId4);
exports.destroy=function(){};

	// make all IDed elements in $.__views available right on the $ in a 
	// controller's internal code. Externally the IDed elements will
	// be accessed with getView().
	_.extend($, $.__views);

	// Controller code directly from the developer's controller file
	

	// Generated code that must be executed after all UI and
	// controller code. One example deferred event handlers whose
	// functions are not defined until after the controller code
	// is executed.
	

	// Extend the $ instance with all functions and properties 
	// defined on the exports object.
	_.extend($, exports);
}

module.exports = Controller;