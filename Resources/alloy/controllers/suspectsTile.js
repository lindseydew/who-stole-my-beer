function Controller() {
    function hideAnimation() {
        Ti.API.info("hide animation");
        $.suspectsTile.backgroundImage = "";
        $.suspectsTile.backgroundColor = "red";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.suspectsTile = A$(Ti.UI.createView({
        width: "90",
        height: "90",
        backgroundColor: "#b2bccc",
        id: "suspectsTile"
    }), "View", null);
    $.addTopLevelView($.__views.suspectsTile);
    hideAnimation ? $.__views.suspectsTile.on("click", hideAnimation) : __defers["$.__views.suspectsTile!click!hideAnimation"] = !0;
    $.__views.__alloyId4 = A$(Ti.UI.createLabel({
        id: "__alloyId4"
    }), "Label", $.__views.suspectsTile);
    $.__views.suspectsTile.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ee:" + args.backgroundColor);
    $.suspectsTile.left = args.left;
    $.suspectsTile.top = args.top;
    $.suspectsTile.backgroundImage = args.backgroundImage;
    __defers["$.__views.suspectsTile!click!hideAnimation"] && $.__views.suspectsTile.on("click", hideAnimation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;