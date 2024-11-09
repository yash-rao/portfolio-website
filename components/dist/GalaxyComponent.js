"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
// Constants
var PI = Math.PI;
var TAU = PI * 2;
var MAX_GALAXIES = 5; // Set the maximum number of galaxies
// Main Component
var GalaxyComponent = function () {
    var canvasRef = react_1.useRef(null);
    var ctx = react_1.useRef(null);
    var mouse = {
        pos: {
            x: typeof window !== "undefined" ? window.innerWidth * 0.5 : 0,
            y: typeof window !== "undefined" ? window.innerHeight * 0.5 : 0
        },
        speed: 0
    };
    var galaxies = [];
    var currentGalaxy = null;
    var drawingMode = false;
    // Initialize canvas
    var initCanvas = function () {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (canvasRef.current) {
            canvasRef.current.width = w;
            canvasRef.current.height = h;
            ctx.current = canvasRef.current.getContext("2d");
        }
    };
    // Helper functions
    var r = function () { return Math.random(); };
    var angle2 = function (p1, p2) {
        return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
    };
    var distance2 = function (p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    };
    var createDustParticle = function (color) {
        var canvas = document.createElement("canvas");
        var w = 100;
        var h = 100;
        var ctx = canvas.getContext("2d");
        canvas.width = w;
        canvas.height = h;
        var cx = w * 0.5;
        var cy = h * 0.5;
        var colorValue = color || {
            r: Math.round(150 + (r() * 100)),
            g: Math.round(50 + (r() * 100)),
            b: Math.round(50 + (r() * 100))
        };
        ctx.fillStyle = "rgba(" + colorValue.r + "," + colorValue.g + "," + colorValue.b + ",.02)";
        Array.from(new Array(200)).forEach(function (_, i) {
            var xRand = -5 + (r() * 10);
            var yRand = -5 + (r() * 10);
            var xRand2 = 10 + (r() * (cx / 2));
            var yRand2 = 10 + (r() * (cy / 2));
            var x = Math.cos((TAU / xRand / 200) * i) * (r() * xRand2) + cx;
            var y = Math.sin((TAU / yRand / 200) * i) * (r() * yRand2) + cy;
            ctx.beginPath();
            ctx.arc(x, y, r() * 4, 0, TAU);
            ctx.fill();
        });
        return canvas;
    };
    var createGalaxy = function (x, y) { return ({
        x: x,
        y: y,
        stars: [],
        dust: [],
        drag: r() * 0.05,
        angleOffsetX: TAU * r(),
        angleOffsetY: TAU * r(),
        realAngleOffsetX: 0,
        realAngleOffsetY: 0,
        color: {
            r: Math.round(50 + r() * 100),
            g: Math.round(50 + r() * 100),
            b: Math.round(150 + r() * 100)
        },
        calculateCenter: function () {
            if (!this.stars.length)
                return;
            this.x = this.stars.reduce(function (acc, star) { return acc + star.x; }, 0) / this.stars.length;
            this.y = this.stars.reduce(function (acc, star) { return acc + star.y; }, 0) / this.stars.length;
        }
    }); };
    var createStar = function (x, y, spread) { return ({
        x: x + Math.cos(TAU * r()) * spread,
        y: y + Math.sin(TAU * r()) * spread,
        radius: r() + 0.25,
        speed: r()
    }); };
    var createDust = function (x, y, size) { return ({
        x: x,
        y: y,
        size: size,
        texture: createDustParticle(),
        speed: r()
    }); };
    var updateStarDust = function (s, g) {
        if (g === currentGalaxy && drawingMode)
            return;
        s.angle = s.angle || angle2([g.x, g.y], [s.x, s.y]);
        s.distance = s.distance || distance2([g.x, g.y], [s.x, s.y]);
        s.angle += (0.4 + s.speed * 0.1) / s.distance;
        s.x = g.x + Math.cos(s.angle + g.realAngleOffsetX) * s.distance;
        s.y = g.y + Math.sin(s.angle + g.realAngleOffsetY) * s.distance;
    };
    var update = function () {
        galaxies.forEach(function (g) {
            if (g !== currentGalaxy) {
                g.realAngleOffsetX += g.realAngleOffsetX < g.angleOffsetX
                    ? (g.angleOffsetX - g.realAngleOffsetX) * 0.05
                    : 0;
                g.realAngleOffsetY += g.realAngleOffsetY < g.angleOffsetY
                    ? (g.angleOffsetY - g.realAngleOffsetY) * 0.05
                    : 0;
            }
            g.stars.forEach(function (s) { return updateStarDust(s, g); });
            g.dust.forEach(function (d) { return updateStarDust(d, g); });
        });
    };
    var render = function () {
        if (!ctx.current)
            return;
        ctx.current.globalCompositeOperation = "source-over";
        ctx.current.fillStyle = "rgba(0,0,0,.05)";
        ctx.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.current.globalCompositeOperation = "lighter";
        ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.current.fillStyle = "#ffffff";
        ctx.current.strokeStyle = "rgba(255,255,255,.05)";
        galaxies.forEach(function (g) {
            g.stars.forEach(function (s) {
                ctx.current.beginPath();
                ctx.current.moveTo(s.x, s.y);
                ctx.current.arc(s.x, s.y, s.radius, 0, TAU);
                ctx.current.fill();
            });
            g.dust.forEach(function (d) {
                ctx.current.drawImage(d.texture, d.x - (d.size * 0.5), d.y - (d.size * 0.5), d.size, d.size);
            });
        });
        if (drawingMode && currentGalaxy) {
            ctx.current.beginPath();
            currentGalaxy.stars.forEach(function (s) {
                ctx.current.moveTo(s.x, s.y);
                ctx.current.lineTo(currentGalaxy.x, currentGalaxy.y);
            });
            ctx.current.stroke();
        }
    };
    var draw = function (e) {
        if (!drawingMode)
            return;
        var newStar = createStar(mouse.pos.x, mouse.pos.y, mouse.speed);
        currentGalaxy === null || currentGalaxy === void 0 ? void 0 : currentGalaxy.stars.push(newStar);
        if (mouse.speed * 1.5 > 13 && mouse.speed < 100) {
            currentGalaxy === null || currentGalaxy === void 0 ? void 0 : currentGalaxy.dust.push(createDust((currentGalaxy.x + (Math.cos(TAU * r()) * mouse.speed * 0.1)), (currentGalaxy.y + (Math.sin(TAU * r()) * mouse.speed * 0.1)), mouse.speed * 1.5));
        }
        currentGalaxy === null || currentGalaxy === void 0 ? void 0 : currentGalaxy.calculateCenter();
    };
    // Event handlers
    var activateDraw = function (e) {
        var _a;
        if (galaxies.length >= MAX_GALAXIES)
            galaxies.shift(); // Remove oldest galaxy if exceeding limit
        drawingMode = true;
        var rect = (_a = canvasRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (rect) {
            if (e instanceof MouseEvent) {
                mouse.pos.x = e.clientX - rect.left;
                mouse.pos.y = e.clientY - rect.top;
            }
            else if (e instanceof TouchEvent && e.touches.length > 0) {
                mouse.pos.x = e.touches[0].clientX - rect.left;
                mouse.pos.y = e.touches[0].clientY - rect.top;
            }
        }
        currentGalaxy = createGalaxy(mouse.pos.x, mouse.pos.y);
        galaxies.push(currentGalaxy);
    };
    var disableDraw = function () {
        drawingMode = false;
        currentGalaxy = null;
    };
    var moveEvent = function (e) {
        var _a;
        var rect = (_a = canvasRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (rect) {
            var newX = void 0, newY = void 0;
            if (e instanceof MouseEvent) {
                newX = e.clientX - rect.left;
                newY = e.clientY - rect.top;
            }
            else if (e instanceof TouchEvent && e.touches.length > 0) {
                newX = e.touches[0].clientX - rect.left;
                newY = e.touches[0].clientY - rect.top;
            }
            else {
                return; // Exit if event type is neither MouseEvent nor TouchEvent
            }
            mouse.speed = distance2([newX, newY], [mouse.pos.x, mouse.pos.y]);
            mouse.pos.x = newX;
            mouse.pos.y = newY;
            draw(e); // `draw` expects MouseEvent, cast to avoid errors
        }
    };
    var loop = function () {
        draw(new MouseEvent('mousemove', { clientX: mouse.pos.x, clientY: mouse.pos.y })); // Fake draw event
        update();
        render();
        window.requestAnimationFrame(loop);
    };
    // Setup event listeners and canvas
    react_1.useEffect(function () {
        initCanvas();
        // Define exactly 1 galaxy
        var positions = [
            { x: window.innerWidth * 0.65, y: window.innerHeight * 0.55 },
        ];
        // Create one galaxy
        var galaxy = createGalaxy(positions[0].x, positions[0].y);
        for (var i = 0; i < 250; i++) {
            galaxy.stars.push(createStar(galaxy.x, galaxy.y, 200));
        }
        for (var i = 0; i < 20; i++) {
            galaxy.dust.push(createDust(galaxy.x, galaxy.y, 150));
        }
        galaxy.calculateCenter();
        galaxies.push(galaxy); // Push the single galaxy into the galaxies array
        loop(); // Start the animation loop
        var canvasElement = canvasRef.current;
        if (canvasElement) {
            canvasElement.addEventListener("mousedown", activateDraw);
            canvasElement.addEventListener("mousemove", moveEvent);
            canvasElement.addEventListener("mouseup", disableDraw);
            canvasElement.addEventListener("touchstart", activateDraw);
            canvasElement.addEventListener("touchmove", moveEvent);
            canvasElement.addEventListener("touchend", disableDraw);
        }
        return function () {
            if (canvasElement) {
                canvasElement.removeEventListener("mousedown", activateDraw);
                canvasElement.removeEventListener("mousemove", moveEvent);
                canvasElement.removeEventListener("mouseup", disableDraw);
                canvasElement.removeEventListener("touchstart", activateDraw);
                canvasElement.removeEventListener("touchmove", moveEvent);
                canvasElement.removeEventListener("touchend", disableDraw);
            }
        };
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("canvas", { ref: canvasRef }),
        react_1["default"].createElement("div", { className: "intro" }),
        react_1["default"].createElement("style", { jsx: true }, "\n        body {\n          overflow: hidden;\n        }\n        canvas {\n          background-color:#010f27;\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          mix-blend-mode: screen;\n        }\n        .intro {\n          position: absolute;\n          z-index: 1;\n          top: 20px;\n          left: 20px;\n          color: white;\n          text-align: left;\n        }\n      ")));
};
exports["default"] = GalaxyComponent;
