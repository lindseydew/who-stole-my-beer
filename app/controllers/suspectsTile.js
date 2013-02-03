// hide [change to red]
var args = arguments[0] || {};

Ti.API.info('ee:'+args.backgroundColor);

$.suspectsTile.left = args.left;
$.suspectsTile.top = args.top;
$.suspectsTile.backgroundImage = args.backgroundImage;

function hideAnimation (){
	Ti.API.info('hide animation');
	$.suspectsTile.backgroundImage = "";
	$.suspectsTile.backgroundColor = "red";
}