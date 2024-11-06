"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Toast = function (_a) {
    var message = _a.message, type = _a.type, onClose = _a.onClose;
    react_1.useEffect(function () {
        var timer = setTimeout(onClose, 5000); // Close toast after 10 seconds
        return function () { return clearTimeout(timer); };
    }, [onClose]);
    return (React.createElement("div", { className: "toast " + type }, message));
};
exports["default"] = Toast;
