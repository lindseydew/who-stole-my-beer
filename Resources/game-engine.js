var dataLayer = require("data-layer");

exports.StartNewGame = function() {
    criminalPerson = dataLayer.getSuspects();
    suspectCount = 20;
    cluesList = dataLayer.getClues();
};

exports.Accuse = function(person) {
    return (person.id = criminalPerson.id) ? !0 : !1;
};

exports.AccusePass = function(gender) {
    var randomImage = "m1.jpg";
    return "/images/pass/" + randomImage;
};

exports.AccuseFail = function(gender) {
    var randomImage = "m1.jpg";
    return "/images/fail/" + randomImage;
};

exports.GetFinalGameRatingImage = function(score) {
    var randomImage = "1.jpg";
    return "/images/rating/" + randomImage;
};

exports.OnTick = function() {};

exports.TimeOut = function() {
    return !1;
};

exports.PauseGame = function() {};

exports.ResumeGame = function() {};

exports.SetupLevel = function(levelId) {
    criminalPerson = dataLayer.GetCriminal();
    suspectCount += 1;
    remainingGameTime > 10 && (remainingGameTime -= levelTimeReduction);
    suspectsList = GetSuspects(suspectCount, criminalPerson.id);
    cluesList = dataLayer.GetClues(criminalPerson);
};

exports.AddScoreToLeaderBoard = function(score, playerName) {};