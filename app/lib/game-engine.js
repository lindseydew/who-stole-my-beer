var dataLayer=require('data-layer');

exports.StartNewGame=function()
{
	criminalPerson=DataLayer.GetCriminal();
	suspectCount=initial_suspect_count;  
	suspectsList=GetSuspects(suspectCount, criminalPerson.id);
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
}
exports.TimeOut=function(){
 // TODO
}
exports.PauseGame=function(){
 // TODO
}
exports.ResumeGame=function(){
 // TODO
}
exports.SetupLevel=function(levelId){
 // TODO
}
exports.AddScoreToLeaderBoard=function(score, playerName)
{
	// TODO
}