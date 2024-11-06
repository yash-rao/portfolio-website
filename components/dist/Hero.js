"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TextRoller_1 = require("./TextRoller"); // Adjust the path based on your project structure
require("../styles/rays.css");
require("../styles/social-icons.css");
var Hero = function () {
    return (react_1["default"].createElement("section", { id: "home", className: 'hero-wrapper' },
        react_1["default"].createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" }),
        react_1["default"].createElement("div", { className: 'rays' }),
        react_1["default"].createElement("div", { className: 'hero-content' },
            react_1["default"].createElement("div", { className: "hero-left" },
                react_1["default"].createElement(TextRoller_1["default"], null),
                react_1["default"].createElement("h1", { className: "hero-title" },
                    "I'm ",
                    react_1["default"].createElement("strong", null, "Aniket Ahir"),
                    "."),
                react_1["default"].createElement("h2", { className: "hero-subtitle" }, "Software Engineer | Full Stack Developer | Cinephile | Gamer"),
                react_1["default"].createElement("a", { href: "https://drive.google.com/file/d/1QWsfjDpDpi-DqcVk813lbn5mjs2-7wxI/view", target: "_blank", className: "resume-button" },
                    react_1["default"].createElement("div", { className: "text-container" },
                        react_1["default"].createElement("span", { className: "text" }, "Resume"),
                        react_1["default"].createElement("span", { className: "text" }, "Open"))),
                react_1["default"].createElement("div", { className: "social-media-icons" },
                    react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/aniketahir/", target: "_blank", className: "social-icon linkedin" },
                        react_1["default"].createElement("i", { className: "fa-brands fa-linkedin-in" })),
                    react_1["default"].createElement("a", { href: "https://github.com/ahiraniket/", target: "_blank", className: "social-icon github" },
                        react_1["default"].createElement("i", { className: "fa-brands fa-github" })),
                    react_1["default"].createElement("a", { href: "mailto:aaahir@asu.edu", target: "_blank", className: "social-icon gmail" },
                        react_1["default"].createElement("i", { className: "fa-solid fa-envelope" })))),
            react_1["default"].createElement("div", { className: "hero-right" },
                react_1["default"].createElement("div", { className: "hero-photo-wrapper" },
                    react_1["default"].createElement("img", { src: "../images/sample-avatar.jpg", alt: "Aniket Ahir", className: "hero-photo" }))))));
};
exports["default"] = Hero;
