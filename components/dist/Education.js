"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var jquery_1 = require("jquery");
var Education = function () {
    react_1.useEffect(function () {
        var initParticles = function () {
            var canvas = document.getElementById("container");
            var clone = document.getElementById("blurCanvasBottom");
            var cloneCtx = clone.getContext("2d");
            var ctx = canvas.getContext("2d");
            if (!ctx || !cloneCtx) {
                console.error("Failed to get canvas context");
                return;
            }
            var ww = jquery_1["default"](window).width() || 0;
            var wh = jquery_1["default"](window).height() || 0;
            canvas.width = ww;
            canvas.height = wh;
            var partCount = 100;
            var particles = [];
            var Particle = /** @class */ (function () {
                function Particle() {
                    this.color = "rgba(255,255,225," + Math.random() + ")";
                    this.x = Math.floor(Math.random() * ww);
                    this.y = Math.floor(Math.random() * wh);
                    this.direction = {
                        x: -1 + Math.random() * 2,
                        y: -1 + Math.random() * 2
                    };
                    this.vx = 0.3 * Math.random();
                    this.vy = 0.3 * Math.random();
                    this.radius = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
                }
                Particle.prototype.float = function () {
                    this.x += this.vx * this.direction.x;
                    this.y += this.vy * this.direction.y;
                };
                Particle.prototype.changeDirection = function (axis) {
                    this.direction[axis] *= -1;
                };
                Particle.prototype.boundaryCheck = function () {
                    if (this.x >= ww || this.x <= 0)
                        this.changeDirection("x");
                    if (this.y >= wh || this.y <= 0)
                        this.changeDirection("y");
                };
                Particle.prototype.draw = function () {
                    ctx.beginPath(); // Non-null assertion to tell TypeScript it's safe
                    ctx.fillStyle = this.color;
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.fill();
                };
                return Particle;
            }());
            function clearCanvas() {
                cloneCtx.clearRect(0, 0, ww, wh); // Non-null assertion
                ctx.clearRect(0, 0, ww, wh); // Non-null assertion
            }
            function createParticles() {
                for (var i = 0; i < partCount; i++) {
                    particles.push(new Particle());
                }
            }
            function animateParticles() {
                clearCanvas();
                particles.forEach(function (p) {
                    p.float();
                    p.boundaryCheck();
                    p.draw();
                });
                cloneCtx.drawImage(canvas, 0, 0); // Non-null assertion
                requestAnimationFrame(animateParticles);
            }
            jquery_1["default"](window).on("resize", function () {
                ww = jquery_1["default"](window).width() || 0;
                wh = jquery_1["default"](window).height() || 0;
                canvas.width = ww;
                canvas.height = wh;
                clearCanvas();
                particles.length = 0;
                createParticles();
            });
            createParticles();
            animateParticles();
        };
        initParticles();
    }, []);
    return (react_1["default"].createElement("section", { id: "education", className: "education-section" },
        react_1["default"].createElement("div", { className: "education-blur-container" },
            react_1["default"].createElement("canvas", { className: "education-canvas", id: "blurCanvasBottom" })),
        react_1["default"].createElement("canvas", { className: "education-particles-container", id: "container", role: "main" }),
        react_1["default"].createElement("div", { className: "education-content-container" },
            react_1["default"].createElement("div", { className: "section-heading" }, "Education"),
            react_1["default"].createElement("div", { className: "education-timeline" }, [
                {
                    year: "2022",
                    degree: "Master of Science",
                    major: "Computer Science",
                    institution: "Arizona State University",
                    logo: "../images/edu/asu.png"
                },
                {
                    year: "2018",
                    degree: "Bachelor of Engineering",
                    major: "Computer Engineering",
                    institution: "Gujarat Technological University",
                    logo: "../images/edu/gtu.png"
                },
                {
                    year: "2014",
                    degree: "High School",
                    major: "",
                    institution: "Rachana School",
                    logo: "../images/edu/rachana.png"
                },
            ].map(function (edu, index) { return (react_1["default"].createElement("div", { key: index, className: "education-timeline-item" },
                react_1["default"].createElement("div", { className: "education-year" }, edu.year),
                react_1["default"].createElement("div", { className: "education-logo" },
                    react_1["default"].createElement("img", { src: edu.logo, alt: edu.institution + " logo" })),
                react_1["default"].createElement("div", { className: "education-details" },
                    react_1["default"].createElement("h3", { className: "education-degree-title" }, edu.degree),
                    react_1["default"].createElement("h4", { className: "education-degree-major" }, edu.major),
                    react_1["default"].createElement("p", { className: "education-institution-name" }, edu.institution)))); })))));
};
exports["default"] = Education;
