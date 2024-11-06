"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/loader.css");
var Loader = function () {
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(false), fadeOut = _b[0], setFadeOut = _b[1];
    react_1.useEffect(function () {
        document.documentElement.style.setProperty('--overflow', 'hidden');
        var timer = setTimeout(function () {
            setFadeOut(true);
            var fadeTimer = setTimeout(function () {
                setLoading(false);
                document.documentElement.style.setProperty('--overflow', 'auto');
            }, 500);
            return function () { return clearTimeout(fadeTimer); };
        }, 500);
        return function () { return clearTimeout(timer); };
    }, []);
    if (!loading)
        return null;
    return (react_1["default"].createElement("div", { className: "loading " + (fadeOut ? 'fade-out' : '') },
        react_1["default"].createElement("div", { className: "loading-text" },
            react_1["default"].createElement("span", { className: "loading-text-words" }, "E "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "X "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "E "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "L "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "S "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "I "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "O "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "R "),
            react_1["default"].createElement("span", { className: "loading-text-words" }, "! "))));
};
exports["default"] = Loader;
