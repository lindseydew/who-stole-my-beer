var fileName = "people.txt", file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);

if (file.exists()) var data = Ti.Platform.osname === "android" ? "" + file.read() : file.read();

var peopleData = JSON.parse(data), fileNameClue = "clues.txt", fileClue = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);

if (fileClue.exists()) var dataClue = Ti.Platform.osname === "android" ? "" + fileClue.read() : fileClue.read();

var peopleData = JSON.parse(data), clueData = JSON.parse(dataClue);

exports.getSuspects = function() {
    return peopleData;
};

exports.getClues = function() {
    return clueData;
};