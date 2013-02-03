	// Show animation screen for stolen pint
	
	// Start the new game board
	//StartNewGame();
	
function hideAnimation (){
	Ti.API.info('hide animation')
	
	var gameView =  Alloy.createController('gameView').getView();
	
	gameView.animate({view:gameView,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});


}

