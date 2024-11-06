"use strict";
exports.__esModule = true;
var Navbar_1 = require("../components/Navbar");
var Hero_1 = require("../components/Hero");
var About_1 = require("../components/About");
var Education_1 = require("../components/Education");
var Work_1 = require("../components/Work");
var Projects_1 = require("../components/Projects");
var Contact_1 = require("../components/Contact");
var Loader_1 = require("../components/Loader");
var Footer_1 = require("@/components/Footer");
function Home() {
    return (React.createElement("div", null,
        React.createElement(Loader_1["default"], null),
        React.createElement(Navbar_1["default"], null),
        React.createElement(Hero_1["default"], null),
        React.createElement(About_1["default"], null),
        React.createElement(Education_1["default"], null),
        React.createElement(Work_1["default"], null),
        React.createElement(Projects_1["default"], null),
        React.createElement(Contact_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
