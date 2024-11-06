'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Work() {
    var workExperiences = [
        {
            employer: "Arizona State University",
            title: "Research Assistant - Living Repository",
            date: "Aug 2023 – May 2024",
            location: "Tempe, AZ",
            description: [
                "Orchestrated precise input of historical and legal data into Quill platform achieving an exceptional 99.5% accuracy rate",
                "Played pivotal role in creating 20% more efficient index for Convention’s digital record within Living Repository Initiative, a collaborative venture with Oxford University’s Quill Project, contributing to 15% reduction in project timeline",
            ],
            tags: ["Data Entry", "Data Management", "Collaboration"],
            logo: "../images/work/asu.png"
        },
        {
            employer: "Arizona State University",
            title: "Data Research Aide",
            date: "Nov 2022 – Jan 2023",
            location: "Tempe, AZ",
            description: [
                "Accelerated data filtration and cleaning process for Historical Newspapers Databases with over 18000 data points",
                "Utilized SQL queries and advanced functionalities for pertinent data acquisition, optimizing collection efficiency by 70%, reducing testing time by over 75% through automated testing and web scraping with Selenium and WebDriver",
            ],
            tags: ["SQL", "Data Acquisition", "Selenium", "WebDriver"],
            logo: "../images/work/asu.png"
        },
        {
            employer: "Axisray",
            title: "Software Engineer Intern",
            date: "Jan 2022 – Apr 2022",
            location: "Ahmedabad, Gujarat, India",
            description: [
                "Collaborated with 8-member cross-functional team to design and implement scalable web applications using Spring MVC",
                "Integrated RESTful APIs using OkHttp enabling real-time JSON data retrieval and processing from 100+ API endpoints",
                "Configured Spring Boot for enhanced application performance, auto-configuration, embedded servers, and production-ready metrics, leading to 25% response time improvement"
            ],
            tags: ["Java", "Spring Boot", "API", "JavaScript"],
            logo: "../images/work/axisray.png"
        },
        {
            employer: "Softvan",
            title: "Software Development Engineer Intern ",
            date: "Mar 2021 – Aug 2021",
            location: "Ahmedabad, Gujarat, India",
            description: [
                "Engineered Personal Cloud Storage System utilizing Amazon Web Services – S3 Bucket, cutting storage costs by 50% and enhancing system reliability by 75%",
                "Designed and executed CRUD operations for organization’s cloud, yielding 30% operational efficiency boost and decreased server maintenance costs",
                "Engaged in agile development environment, driving Scrum implementation and fostering collaborative decision-making"
            ],
            tags: ["AWS", "S3", "CRUD", "Agile", "Scrum"],
            logo: "../images/work/softvan.png"
        },
    ];
    var _a = react_1.useState(1), activeTab = _a[0], setActiveTab = _a[1];
    react_1.useEffect(function () {
        var tabs = document.querySelector('.tabs');
        var highlighter = document.querySelector('.highlighter');
        var activeTabElement = document.querySelector('.tabs .active');
        if (tabs && highlighter && activeTabElement) {
            var updateHighlighter_1 = function () {
                var tabRect = activeTabElement.getBoundingClientRect();
                highlighter.style.top = activeTabElement.offsetTop + "px";
                highlighter.style.height = tabRect.height + "px";
            };
            updateHighlighter_1();
            window.addEventListener('resize', updateHighlighter_1);
            return function () {
                window.removeEventListener('resize', updateHighlighter_1);
            };
        }
    }, [activeTab]);
    var handleTabClick = function (index, e) {
        e.preventDefault();
        setActiveTab(index + 1);
    };
    return (React.createElement("section", { id: "work", className: "work-section" },
        React.createElement("div", { className: "section-heading" }, "Work Experience"),
        React.createElement("div", { className: "work-container" },
            React.createElement("div", { className: "work-tabs tabs" },
                React.createElement("span", { className: "work-highlighter-track" }),
                " ",
                workExperiences.map(function (work, index) { return (React.createElement("a", { key: index, className: "work-tab work-tab-" + (index + 1) + " " + (index + 1 === activeTab ? 'active' : ''), href: "#work", "data-tab": index + 1, onClick: function (e) { return handleTabClick(index, e); } }, work.employer)); }),
                React.createElement("span", { className: "work-highlighter highlighter" })),
            React.createElement("div", { className: "work-content content" }, workExperiences.map(function (work, index) { return (React.createElement("div", { key: index, className: "work-content__section content__section " + (index + 1 === activeTab ? 'visible' : ''), "data-tab": index + 1 },
                React.createElement("div", { className: "work-header" },
                    React.createElement("img", { src: work.logo, alt: work.employer + " logo", className: "work-logo" }),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "work-title" }, work.title),
                        React.createElement("div", { className: "work-employer" }, work.employer))),
                React.createElement("div", { className: "work-details" },
                    work.date,
                    " | ",
                    work.location),
                React.createElement("ul", { className: "work-description" }, work.description.map(function (item, idx) { return (React.createElement("li", { key: idx }, item)); })),
                React.createElement("div", { className: "work-tags" }, work.tags.map(function (tag, idx) { return (React.createElement("span", { key: idx, className: "work-tag" }, tag)); })))); })))));
}
exports["default"] = Work;
