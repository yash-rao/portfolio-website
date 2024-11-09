"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Toast_1 = require("./Toast"); // Import the Toast component
var GalaxyComponent_1 = require("./GalaxyComponent");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
function Contact() {
    var _this = this;
    var _a = react_1.useState({ name: '', email: '', subject: '', message: '' }), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState(false), isSent = _b[0], setIsSent = _b[1];
    var _c = react_1.useState(''), errorMessage = _c[0], setErrorMessage = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1]; // State for loading
    var _e = react_1.useState(''), toastMessage = _e[0], setToastMessage = _e[1];
    var _f = react_1.useState(null), toastType = _f[0], setToastType = _f[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var apiUrl, response, errorResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true); // Set loading state to true
                    apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/send';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    setToastMessage('Message sent successfully!');
                    setToastType('success');
                    setIsSent(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    errorResponse = _a.sent();
                    setToastMessage(errorResponse.error || 'There was a problem sending your message.');
                    setToastType('error');
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    setToastMessage('Failed to send the message. Please try again later.');
                    setToastType('error');
                    return [3 /*break*/, 8];
                case 7:
                    setLoading(false); // Set loading state to false
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("section", { id: "contact", className: "contact-section" },
        React.createElement("div", { className: "galaxy-background" },
            React.createElement(GalaxyComponent_1["default"], null)),
        React.createElement("div", { className: "contact-section-heading-wrapper" },
            React.createElement("h2", { className: "section-heading" }, "Contact"),
            React.createElement("p", { className: "contact-section-subheading" }, "I'd love to hear from you!"),
            React.createElement("p", { className: "contact-section-tagline" }, "Like the forge of Nidavellir, your mouse is the key\u2014click, drag, and craft a galaxy of possibilities before sending your message.")),
        React.createElement("div", { className: "contact-content", style: { position: 'relative', zIndex: 2 } },
            React.createElement("div", { className: "contact-form" },
                React.createElement("form", { onSubmit: handleSubmit },
                    React.createElement("div", { className: "contact-form-group" },
                        React.createElement("span", { className: "contact-icon" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser })),
                        React.createElement("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, className: "contact-form-control", placeholder: " ", required: true }),
                        React.createElement("label", { htmlFor: "name", className: "contact-form-label" }, "What's your name, commander?")),
                    React.createElement("div", { className: "contact-form-group" },
                        React.createElement("span", { className: "contact-icon" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope })),
                        React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, className: "contact-form-control", placeholder: " ", required: true }),
                        React.createElement("label", { htmlFor: "email", className: "contact-form-label" }, "What's the email for your ship?")),
                    React.createElement("div", { className: "contact-form-group" },
                        React.createElement("span", { className: "contact-icon" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faFileAlt })),
                        React.createElement("input", { type: "text", name: "subject", value: formData.subject, onChange: handleChange, className: "contact-form-control", placeholder: " ", required: true }),
                        React.createElement("label", { htmlFor: "subject", className: "contact-form-label" }, "Show me our subject...")),
                    React.createElement("div", { className: "contact-form-group" },
                        React.createElement("span", { className: "contact-icon" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCommentDots })),
                        React.createElement("textarea", { className: "contact-form-control", rows: 1, onInput: function (e) {
                                var target = e.target;
                                target.style.height = "auto";
                                target.style.height = Math.min(target.scrollHeight, 200) + "px";
                            }, name: "message", value: formData.message, onChange: handleChange, placeholder: " " }),
                        React.createElement("label", { htmlFor: "message", className: "contact-form-label" }, "Brief me about our next mission...")),
                    React.createElement("button", { type: "submit", className: "contact-submit-button", disabled: loading }, loading ? (React.createElement(React.Fragment, null,
                        "Sending Transmission ",
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSpinner, spin: true }))) : (React.createElement(React.Fragment, null,
                        "Send Transmission ",
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faSpaceAwesome }))))),
                isSent && toastType && (React.createElement(Toast_1["default"], { message: toastMessage, type: toastType, onClose: function () {
                        setToastMessage('');
                        setToastType(null);
                    } })),
                errorMessage && React.createElement("p", { className: "contact-error-message" }, errorMessage)))));
}
exports["default"] = Contact;
