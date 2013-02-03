var dataLayer=require('data-layer');

exports.StartNewGame=function()
{
	criminalPerson=dataLayer.getSuspects();
	suspectCount=20;  
	// suspectsList=GetSuspects(suspectCount, criminalPerson.id);
	cluesList=dataLayer.getClues();
}
exports.Accuse=function(person){
	if (person.id=criminalPerson.id){
		return true;
	}
	else {
		return false;
	}
}
exports.AccusePass=function(gender) // Pass back an image path for the background image
{
	var randomImage="m1.jpg";//  gender+Math.floor(Math.random()*max_pass_images) +".jpg";
	return "/images/pass/" + randomImage;
}
exports.AccuseFail=function(gender) // Pass back an image path for the background image
{
	var randomImage="m1.jpg";//  gender+Math.floor(Math.random()*max_pass_images) +".jpg";
	return "/images/fail/" + randomImage;
}
exports.GetFinalGameRatingImage=function(score) // Pass back an image path for the background image
{
	var randomImage="1.jpg";
	return "/images/rating/" + randomImage;
}
exports.OnTick=function(){
 // TODO
 	// See if we need to do anything yet
// if (lastTickTime.add)timerInterval
// lastTickTime=now();
}
exports.TimeOut=function(){
 // TODO
 return false;
}
exports.PauseGame=function(){
 // TODO
}
exports.ResumeGame=function(){
 // TODO
}
exports.SetupLevel=function(levelId){
	criminalPerson=dataLayer.GetCriminal();
	suspectCount=suspectCount+1;  
	if (remainingGameTime>10)
	{
		remainingGameTime=remainingGameTime-levelTimeReduction;
	}
	suspectsList=GetSuspects(suspectCount, criminalPerson.id);
	cluesList=dataLayer.GetClues(criminalPerson);
	
}
exports.AddScoreToLeaderBoard=function(score, playerName)
{
	// TODO
}