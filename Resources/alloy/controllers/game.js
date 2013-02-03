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
        width: "290",
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
    var stdLeftVal = 100, multiplier = 0, leftVal, j = 0, topVal = 0;
    for (i = 0; i < 9; i++) {
        leftVal = stdLeftVal * multiplier;
        multiplier++;
        Ti.API.info("-> topVal=" + topVal + " leftVal= " + leftVal);
        var suspectsTile = Alloy.createController("suspectsTile", {
            pk: i,
            backgroundImage: "/images/suspects/suspect" + i + ".jpg",
            backgroundColor: "#222",
            left: leftVal,
            top: topVal
        }).getView();
        $.gameView.add(suspectsTile);
        j++;
        Ti.API.info("j now" + j);
        if (j === 3) {
            j = 0;
            topVal += 100;
            multiplier = 0;
        }
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;