function Controller() {
    function backToHome() {
        Ti.API.info("close window");
        $.instructions.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.instructions = A$(Ti.UI.createWindow({
        backgroundColor: "#000",
        backgroundImage: "/images/woodbg.png",
        id: "instructions",
        title: "Instructions"
    }), "Window", null);
    $.addTopLevelView($.__views.instructions);
    $.__views.__alloyId2 = A$(Ti.UI.createLabel({
        color: "#fff",
        text: "Controls Hmm..",
        id: "__alloyId2"
    }), "Label", $.__views.instructions);
    $.__views.instructions.add($.__views.__alloyId2);
    $.__views.back = A$(Ti.UI.createButton({
        top: "10dp",
        left: "10dp",
        backgroundImage: "/images/backicon.png",
        height: 40,
        width: 40,
        id: "back",
        title: ""
    }), "Button", $.__views.instructions);
    $.__views.instructions.add($.__views.back);
    backToHome ? $.__views.back.on("click", backToHome) : __defers["$.__views.back!click!backToHome"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.back!click!backToHome"] && $.__views.back.on("click", backToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;