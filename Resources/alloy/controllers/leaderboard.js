function Controller() {
    function backToHome() {
        Ti.API.info("close window");
        $.leaderboard.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.leaderboard = A$(Ti.UI.createWindow({
        backgroundColor: "#000",
        backgroundImage: "/images/woodbg.png",
        id: "leaderboard",
        title: "Leaderboard"
    }), "Window", null);
    $.addTopLevelView($.__views.leaderboard);
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        text: "Leaderboard",
        id: "__alloyId3"
    }), "Label", $.__views.leaderboard);
    $.__views.leaderboard.add($.__views.__alloyId3);
    $.__views.back = A$(Ti.UI.createButton({
        top: "10dp",
        left: "10dp",
        backgroundImage: "/images/backicon.png",
        height: 40,
        width: 40,
        id: "back",
        title: ""
    }), "Button", $.__views.leaderboard);
    $.__views.leaderboard.add($.__views.back);
    backToHome ? $.__views.back.on("click", backToHome) : __defers["$.__views.back!click!backToHome"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.back!click!backToHome"] && $.__views.back.on("click", backToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;