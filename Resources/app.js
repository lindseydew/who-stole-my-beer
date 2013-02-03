var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone, criminalPerson, suspectsList, suspectCount, remainingGameTime, totalTimeThisLevel, currentLevel, currentSuspectCount, gamerName, timerInterval, lastTickTime, levelTimeReduction, leaderboard, gameEngine, initial_suspect_count = 6;

Alloy.createController("index");