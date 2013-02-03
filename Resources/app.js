var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone, criminalPerson, suspectsList, cluesList, suspectCount, remainingGameTime, totalTimeThisLevel, currentLevel, currentSuspectCount, gamerName, timerInterval, lastTickTime, levelTimeReduction, leaderboard, initial_suspect_count = 6, max_pass_images = 1, max_fail_images = 1;

Alloy.createController("index");