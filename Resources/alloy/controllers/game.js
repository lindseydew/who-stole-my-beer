function Controller() {
    function hideAnimation() {
        Ti.API.info("hide animation");
        var gameView = Alloy.createController("gameView").getView();
        gameView.animate({
            view: gameView,
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
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
    hideAnimation ? $.__views.gameView.on("click", hideAnimation) : __defers["$.__views.gameView!click!hideAnimation"] = !0;
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
    __defers["$.__views.gameView!click!hideAnimation"] && $.__views.gameView.on("click", hideAnimation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;