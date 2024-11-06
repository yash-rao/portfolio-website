"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./galaxy.css"); // Import the CSS file for styles
var GalaxyComponent = function () {
    var dustCanvasRef = react_1.useRef(null);
    var starCanvasRef = react_1.useRef(null);
    var galaxies = react_1.useRef([]);
    var mouse = react_1.useRef({ pos: { x: 0, y: 0 }, speed: 0 });
    var currentGalaxy = null;
    var drawingMode = false;
    react_1.useEffect(function () {
        var dustCanvas = dustCanvasRef.current;
        var starCanvas = starCanvasRef.current;
        if (!dustCanvas || !starCanvas)
            return;
        var dustCtx = dustCanvas.getContext("2d");
        var starCtx = starCanvas.getContext("2d");
        if (!dustCtx || !starCtx)
            return;
        var w = window.innerWidth;
        var h = window.innerHeight;
        dustCanvas.width = starCanvas.width = w;
        dustCanvas.height = starCanvas.height = h;
        dustCtx.globalCompositeOperation = "lighter";
        starCtx.globalCompositeOperation = "lighter";
        mouse.current.pos.x = w * 0.5;
        mouse.current.pos.y = h * 0.5;
        // Create two random galaxies by default
        createRandomGalaxy(w * 0.25, h * 0.5);
        createRandomGalaxy(w * 0.75, h * 0.5);
        // Event listeners for interaction
        window.addEventListener("mousedown", activateDraw);
        window.addEventListener("mousemove", moveEvent);
        window.addEventListener("mouseup", disableDraw);
        window.addEventListener("touchstart", activateDraw);
        window.addEventListener("touchmove", moveEvent);
        window.addEventListener("touchend", disableDraw);
        var loop = function () {
            updateGalaxies();
            renderGalaxies(dustCtx, starCtx, w, h);
            window.requestAnimationFrame(loop);
        };
        loop();
        return function () {
            window.removeEventListener("mousedown", activateDraw);
            window.removeEventListener("mousemove", moveEvent);
            window.removeEventListener("mouseup", disableDraw);
            window.removeEventListener("touchstart", activateDraw);
            window.removeEventListener("touchmove", moveEvent);
            window.removeEventListener("touchend", disableDraw);
        };
    }, []);
    var createRandomGalaxy = function (x, y) {
        var galaxy = new Galaxy(x, y);
        galaxies.current.push(galaxy);
    };
    var activateDraw = function (e) {
        drawingMode = true;
        var _a = getEventPos(e), layerX = _a.layerX, layerY = _a.layerY;
        mouse.current.pos.x = layerX;
        mouse.current.pos.y = layerY;
        currentGalaxy = new Galaxy(layerX, layerY);
        galaxies.current.push(currentGalaxy);
    };
    var disableDraw = function () {
        drawingMode = false;
        currentGalaxy = null;
    };
    var moveEvent = function (e) {
        var _a = getEventPos(e), layerX = _a.layerX, layerY = _a.layerY;
        mouse.current.speed = distance2([layerX, layerY], [mouse.current.pos.x, mouse.current.pos.y]);
        mouse.current.pos.x = layerX;
        mouse.current.pos.y = layerY;
    };
    var updateGalaxies = function () {
        galaxies.current.forEach(function (g) {
            if (g !== currentGalaxy) {
                g.update();
            }
        });
    };
    var renderGalaxies = function (dustCtx, starCtx, w, h) {
        dustCtx.fillStyle = "rgba(0,0,0,.05)";
        dustCtx.fillRect(0, 0, w, h);
        starCtx.clearRect(0, 0, w, h);
        galaxies.current.forEach(function (g) {
            g.render(dustCtx, starCtx);
        });
    };
    var getEventPos = function (e) {
        var _a = "touches" in e ? e.touches[0] : e, clientX = _a.clientX, clientY = _a.clientY;
        return { layerX: clientX, layerY: clientY };
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "intro" },
            react_1["default"].createElement("h1", null, "Let there be light"),
            react_1["default"].createElement("p", null, "Paint with your cursor to create a galaxy")),
        react_1["default"].createElement("canvas", { ref: dustCanvasRef }),
        react_1["default"].createElement("canvas", { ref: starCanvasRef })));
};
// Utility functions and classes
var Galaxy = /** @class */ (function () {
    function Galaxy(x, y) {
        this.x = x;
        this.y = y;
        this.stars = [];
        this.dust = [];
        this.color = { r: 255, g: 255, b: 255 };
        for (var i = 0; i < 50; i++) {
            this.stars.push(new Star(x, y));
        }
    }
    Galaxy.prototype.update = function () {
        var _this = this;
        // Update the galaxy state (e.g., rotation, star positions, etc.)
        this.stars.forEach(function (s) { return s.update(_this); });
    };
    Galaxy.prototype.render = function (dustCtx, starCtx) {
        // Draw the stars and dust
        this.stars.forEach(function (s) { return s.render(starCtx); });
    };
    return Galaxy;
}());
var Star = /** @class */ (function () {
    function Star(x, y) {
        this.x = x + Math.random() * 50 - 25;
        this.y = y + Math.random() * 50 - 25;
        this.radius = Math.random() * 2 + 0.5;
    }
    Star.prototype.update = function (galaxy) {
        // Update star position based on galaxy movement
    };
    Star.prototype.render = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };
    return Star;
}());
var distance2 = function (p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
};
exports["default"] = GalaxyComponent;
