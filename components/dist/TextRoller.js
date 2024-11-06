'use client';
'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/text-roller.css");
var greetings = [
    { text: 'नमस्ते 🙏', color: '#fa8231' },
    { text: 'Hello! 👋', color: '#82b1ff' },
    { text: 'Hola! 🤙', color: '#c678dd' },
    { text: 'Salut! 🙋', color: '#82b1ff' } // Pastel Blue
];
var TextRoller = function () {
    var _a = react_1.useState(''), displayText = _a[0], setDisplayText = _a[1];
    react_1.useEffect(function () {
        var currentGreetingIndex = 0;
        var currentTextIndex = 0;
        var eraseMode = false;
        var timeout = null;
        var animateText = function () {
            timeout = setTimeout(function () {
                if (!eraseMode) {
                    setDisplayText(function (prevText) { return greetings[currentGreetingIndex].text.slice(0, currentTextIndex + 1); });
                    currentTextIndex++;
                    if (currentTextIndex === greetings[currentGreetingIndex].text.length) {
                        eraseMode = true;
                        setTimeout(animateText, 1500); // Delay before erasing
                    }
                    else {
                        animateText();
                    }
                }
                else {
                    setDisplayText(function (prevText) { return greetings[currentGreetingIndex].text.slice(0, currentTextIndex); });
                    currentTextIndex--;
                    if (currentTextIndex === 0) {
                        eraseMode = false;
                        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
                        setTimeout(animateText, 2500); // Delay before next greeting
                    }
                    else {
                        animateText();
                    }
                }
            }, eraseMode ? 50 : 50); // Typing speed and erasing speed
        };
        animateText();
        return function () {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, []);
    return (react_1["default"].createElement("div", { className: 'textRoller' },
        react_1["default"].createElement("div", { className: 'codeLine' },
            react_1["default"].createElement("span", { className: 'codeText' },
                react_1["default"].createElement("span", { className: 'systemText' }, "System"),
                react_1["default"].createElement("span", { className: 'outText' }, ".out"),
                react_1["default"].createElement("span", { className: 'printlnText' }, ".println"),
                "(\"")),
        react_1["default"].createElement("div", { className: 'string' },
            react_1["default"].createElement("h1", { className: 'text', style: { color: greetings[0].color } }, displayText)),
        react_1["default"].createElement("div", { className: 'codeLine' },
            react_1["default"].createElement("span", { className: 'codeText' }, "\");"))));
};
exports["default"] = TextRoller;
