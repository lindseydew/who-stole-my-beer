function Controller() {
    function backToHome() {
        Ti.API.info("close window");
        $.about.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.about = A$(Ti.UI.createWindow({
        backgroundColor: "#000",
        backgroundImage: "/images/woodbg.png",
        id: "about",
        title: "About"
    }), "Window", null);
    $.addTopLevelView($.__views.about);
    $.__views.__alloyId0 = A$(Ti.UI.createLabel({
        text: "About Page",
        id: "__alloyId0"
    }), "Label", $.__views.about);
    $.__views.about.add($.__views.__alloyId0);
    $.__views.back = A$(Ti.UI.createButton({
        top: "10dp",
        left: "10dp",
        backgroundImage: "/images/backicon.png",
        height: 40,
        width: 40,
        id: "back",
        title: ""
    }), "Button", $.__views.about);
    $.__views.about.add($.__views.back);
    backToHome ? $.__views.back.on("click", backToHome) : __defers["$.__views.back!click!backToHome"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.back!click!backToHome"] && $.__views.back.on("click", backToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;