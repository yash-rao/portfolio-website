'use client';
"use strict";
exports.__esModule = true;
// Navbar.tsx
var link_1 = require("next/link");
var react_1 = require("react");
var Navbar = function () {
    var _a = react_1.useState(false), darkMode = _a[0], setDarkMode = _a[1];
    var _b = react_1.useState(false), scrolling = _b[0], setScrolling = _b[1];
    var _c = react_1.useState(''), activePath = _c[0], setActivePath = _c[1];
    var _d = react_1.useState(false), menuOpen = _d[0], setMenuOpen = _d[1];
    var navLinks = react_1.useRef([]);
    var toggleDarkMode = function (event) {
        setDarkMode(event.target.checked);
        if (event.target.checked) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    };
    react_1.useEffect(function () {
        var handleScroll = function () {
            var scrollOffset = window.pageYOffset;
            var sections = ['#about', '#education', '#work', '#projects', '#contact'];
            var foundActive = false;
            sections.forEach(function (section) {
                var element = document.querySelector(section);
                if (element && !foundActive) {
                    var rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActivePath(section);
                        foundActive = true;
                    }
                }
            });
            if (!foundActive) {
                setActivePath('');
            }
            if (scrollOffset > 500) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial active section on load
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    var handleNavLinkClick = function (href) {
        setActivePath(href); // Update active path when NavLink is clicked
        setMenuOpen(false); // Close menu when a link is clicked
    };
    return (React.createElement("nav", { className: "navbar " + (scrolling ? 'colored' : '') },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "logo" },
                React.createElement(link_1["default"], { href: "#home" }, "A.")),
            React.createElement("div", { className: "links " + (menuOpen ? 'open' : '') },
                React.createElement(NavLink, { href: "#about", activePath: activePath, onClick: handleNavLinkClick }, "About"),
                React.createElement(NavLink, { href: "#education", activePath: activePath, onClick: handleNavLinkClick }, "Education"),
                React.createElement(NavLink, { href: "#work", activePath: activePath, onClick: handleNavLinkClick }, "Work"),
                React.createElement(NavLink, { href: "#projects", activePath: activePath, onClick: handleNavLinkClick }, "Projects"),
                React.createElement(NavLink, { href: "#contact", activePath: activePath, onClick: handleNavLinkClick }, "Contact")),
            React.createElement("div", { className: "toggle-wrapper" },
                React.createElement("div", { className: "hamburger", onClick: function () { return setMenuOpen(!menuOpen); } },
                    React.createElement("span", null),
                    React.createElement("span", null),
                    React.createElement("span", null))))));
};
var NavLink = function (_a) {
    var href = _a.href, activePath = _a.activePath, children = _a.children, onClick = _a.onClick;
    return (React.createElement(link_1["default"], { href: href, passHref: true, legacyBehavior: true },
        React.createElement("a", { className: "nav-link " + (activePath === href ? 'active' : ''), onClick: function () { return onClick(href); } }, children)));
};
exports["default"] = Navbar;
