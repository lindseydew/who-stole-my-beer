var fileName = "people.txt", file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);

if (file.exists()) var data = Ti.Platform.osname === "android" ? "" + file.read() : file.read();

var peopleData = JSON.parse(data);

exports.getSuspects = function() {
    return peopleData;
};