// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


// variables here etc all available in all controllers/
var criminalPerson;			// The guilty person
var suspectsList; 			// people collection randomly chosen from available suspects
var suspectCount;			// An incremented value changed each level to find out how many people to get		
var remainingGameTime;		// How long is left before timeout
var totalTimeThisLevel; 	// How many seconds will this level last for
var currentLevel;			// Current level of gameplay
var currentSuspectCount;  	//How many suspects are displayed for this level
var gamerName;				// Name of the gamer for the leaderboard
var timerInterval;			// How long between ticks
var lastTickTime;			// The last time that a tick occurred (used to work out when a tick has occured)
var levelTimeReduction; 	// constant - allows time to be reduced by a fixed amount till it reaches a minimum time
var leaderboard ;			// A collection of previous game stats

var gameEngine;				// The current running game 


var initial_suspect_count=6; // How many suspects are got at the start of the game
var max_pass_images=1; 		// How many pictures currently exist in the pass folder (means we can add more later)
var max_fail_images=1; 		// How many pictures currently exist in the pass folder (means we can add more later)
