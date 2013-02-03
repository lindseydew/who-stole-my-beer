function Controller() {
    function openPlayWin() {
        Ti.API.info("open play window");
        var controller = Alloy.createController("game"), win = controller.getView();
        win.open();
        initialiseGame = data.StartNewGame();
    }
    function openInstructionsWin() {
        Ti.API.info("open instruction window");
        var controller = Alloy.createController("instructions"), win = controller.getView();
        win.open();
    }
    function openAboutWin() {
        Ti.API.info("open about window");
        var controller = Alloy.createController("about"), win = controller.getView();
        win.open();
    }
    function openLeaderboardWin() {
        Ti.API.info("open leaderboard window");
        var controller = Alloy.createController("leaderboard"), win = controller.getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#000",
        backgroundImage: "/images/woodbg.png",
        title: "Tab 1",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.play = A$(Ti.UI.createButton({
        top: "80dp",
        backgroundImage: "/images/playgame.png",
        width: 300,
        height: 60,
        id: "play",
        title: ""
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.play);
    openPlayWin ? $.__views.play.on("click", openPlayWin) : __defers["$.__views.play!click!openPlayWin"] = !0;
    $.__views.instructions = A$(Ti.UI.createButton({
        top: "160dp",
        backgroundImage: "/images/controls.png",
        width: 300,
        height: 60,
        id: "instructions",
        title: ""
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.instructions);
    openInstructionsWin ? $.__views.instructions.on("click", openInstructionsWin) : __defers["$.__views.instructions!click!openInstructionsWin"] = !0;
    $.__views.about = A$(Ti.UI.createButton({
        top: "240dp",
        backgroundImage: "/images/about.png",
        width: 300,
        height: 60,
        id: "about",
        title: ""
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.about);
    openAboutWin ? $.__views.about.on("click", openAboutWin) : __defers["$.__views.about!click!openAboutWin"] = !0;
    $.__views.leaderbaord = A$(Ti.UI.createButton({
        top: "320dp",
        backgroundImage: "/images/leaderboard.png",
        width: 300,
        height: 60,
        id: "leaderbaord",
        title: ""
    }), "Button", $.__views.index);
    $.__views.index.add($.__views.leaderbaord);
    openLeaderboardWin ? $.__views.leaderbaord.on("click", openLeaderboardWin) : __defers["$.__views.leaderbaord!click!openLeaderboardWin"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = require("game-engine");
    $.index.open();
    __defers["$.__views.play!click!openPlayWin"] && $.__views.play.on("click", openPlayWin);
    __defers["$.__views.instructions!click!openInstructionsWin"] && $.__views.instructions.on("click", openInstructionsWin);
    __defers["$.__views.about!click!openAboutWin"] && $.__views.about.on("click", openAboutWin);
    __defers["$.__views.leaderbaord!click!openLeaderboardWin"] && $.__views.leaderbaord.on("click", openLeaderboardWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;