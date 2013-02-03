function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.game = A$(Ti.UI.createWindow({
        backgroundColor: "#000",
        backgroundImage: "/images/woodbg.png",
        id: "game"
    }), "Window", null);
    $.addTopLevelView($.__views.game);
    $.__views.gameView = A$(Ti.UI.createView({
        top: "20dp",
        height: "300dp",
        backgroundColor: "#ff0",
        width: "80%",
        id: "gameView"
    }), "View", $.__views.game);
    $.__views.game.add($.__views.gameView);
    $.__views.infoBar = A$(Ti.UI.createView({
        bottom: 0,
        height: "60dp",
        backgroundColor: "#ff0",
        id: "infoBar"
    }), "View", $.__views.game);
    $.__views.game.add($.__views.infoBar);
    $.__views.clue = A$(Ti.UI.createView({
        bottom: 0,
        height: "60dp",
        backgroundColor: "#369",
        width: "80%",
        right: 0,
        id: "clue"
    }), "View", $.__views.infoBar);
    $.__views.infoBar.add($.__views.clue);
    $.__views.timer = A$(Ti.UI.createView({
        bottom: 0,
        height: "60dp",
        backgroundColor: "#523",
        width: "80%",
        left: 0,
        id: "timer"
    }), "View", $.__views.infoBar);
    $.__views.infoBar.add($.__views.timer);
    $.__views.mask = A$(Ti.UI.createView({
        id: "mask"
    }), "View", $.__views.timer);
    $.__views.timer.add($.__views.mask);
    $.__views.visualTimer = A$(Ti.UI.createView({
        id: "visualTimer"
    }), "View", $.__views.timer);
    $.__views.timer.add($.__views.visualTimer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var stdVal = 40, multiplier = 0, leftVal, j = 0, topVal = 10;
    for (i = 0; i < 9; i++) {
        multiplier++;
        leftVal = stdVal * multiplier;
        Ti.API.info("leftVal =" + leftVal);
        Ti.API.info("J" + j);
        if (j === 2) {
            j = 0;
            topVal += 75;
            multiplier = 0;
        }
        j++;
        Ti.API.info("topVal" + topVal);
        var suspectsTile = Alloy.createController("suspectsTile", {
            pk: i,
            backgroundImage: "/images/suspects/suspect1.jpg",
            backgroundColor: "#222",
            left: leftVal,
            top: topVal
        }).getView();
        $.gameView.add(suspectsTile);
    }
    $.gameView.backgroundColor = "pink";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;