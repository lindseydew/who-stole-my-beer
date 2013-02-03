/*
 * 
 * StartNewGame( ) //Sets up the initial timer, displays the drink stolen animation, creates then opens the grid of suspects
 * TimeOut()  // Occurs when the user has run out of time. Displays close screen (empty beer bottle)
 * Accuse(personId) // Make an accusation - results in pass or fail
 * AccusePass(gender) // Passes back the internal url of a knockout image by gender
 * AccuseFail(gender) // Passes back the internal url of a knuckle image by gender
 * OnTick() // Every time the timer interval is >=lastTickTime + timerInteval then reduces onscreen timer
 * PauseGame() // Pauses the timer.  Happens if phone goes takes call etc.
 * ResumeGame() // After the application goes into suspend mode this restarts the timer
 * SetupLevel(levelId)  // Puts all the list of current suspects into their collection, works out timers etc.
 * AddScoreToLeaderBoard(score, playerName) // Puts current stats about the game onto the leaderboard
 * GetFinalGameRatingImage(score) // Gets the image shown to the user based on how well they did with detecting the thief
 * 
 * global variables
 * ---------------
 * criminalPerson
 * suspectsList // people collection randomly chosen from available suspects
 * remainingGameTime
 * totalTimeThisLevel
 * currentLevel
 * gamerName
 * timerInterval
 * lastTickTime
 * levelTimeReduction // constant - allows time to be reduced by a fixed amount till it reaches a minimum time
 * leaderboard // Collection of stats from previous games
 */
function StartNewGame()
{
	criminalPerson=DataLayer.GetCriminal();
	suspectCount=initial_suspect_count;  
	suspectsList=DataLayer.GetSuspects();
}

function Accuse(person){
	if (person.id=criminalPerson.id){
		return true;
	}
	else {
		return false;
	}
}
function AccusePass(gender)
{
	var randomImage=gender+Math.floor(Math.random()*max_pass_images);
	return "images\pass\" + randomImage;
}
