"use client";
"use strict";
exports.__esModule = true;
function SkillItem(_a) {
    var name = _a.name;
    var imageSrc = "../images/skills/" + name.toLowerCase().replace(/\s+/g, "").replace(/[\(\)\-]/g, "") + ".png";
    return (React.createElement("div", { className: "skill-item" },
        React.createElement("img", { src: imageSrc, alt: name, className: "skill-logo" }),
        React.createElement("span", { className: "skill-text" }, name)));
}
function About() {
    var skills = {
        Languages: ["Java", "Python", "C++", "C Sharp", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
        "Libraries & Frameworks": [
            "Spring Boot", "Hibernate", "Maven", "AngularJS", "ReactJS", "Next.js", "Node.js", "Kafka", "JUnit", "Mocha", "Redux"
        ],
        Database: ["MySQL", "MongoDB", "PostgreSQL", "AWS", "GCP", "Cassandra"],
        Tools: ["Git", "GitHub", "Docker", "Kubernetes", "Selenium", "Postman", "Jenkins", "Linux", "SonarQube", "JIRA", "Figma"]
    };
    return (React.createElement("section", { id: "about", className: "about-section" },
        React.createElement("div", { className: "section-heading" }, "About Me"),
        React.createElement("div", { className: "about-container" },
            React.createElement("div", { className: "macos-folder-window" },
                React.createElement("div", { className: "macos-header" },
                    React.createElement("div", { className: "macos-controls" },
                        React.createElement("span", { className: "macos-button red" }),
                        React.createElement("span", { className: "macos-button yellow" }),
                        React.createElement("span", { className: "macos-button green" }))),
                React.createElement("div", { className: "about-description" },
                    React.createElement("p", null, "My professional journey in software engineering began in 2021, driven by a deep passion for technology and problem-solving. With a Master's in Computer Software Engineering from Arizona State University and a Bachelor's in Computer Engineering from Gujarat Technological University, I've honed my skills through impactful experiences. At Softvan, I engineered a Personal Cloud Storage System, and at Axisray, I collaborated on designing scalable web applications and integrating RESTful APIs. My role as a Research Assistant at ASU involved working on the Living Repository Initiative with Oxford University, where I improved data accuracy and efficiency. I thrive on transforming complex ideas into elegant solutions, consistently delivering innovative and effective results. My commitment to continuous learning and excellence fuels my drive to push the boundaries of technology.")))),
        React.createElement("div", { className: "skills-container" }, Object.entries(skills).map(function (_a) {
            var category = _a[0], items = _a[1];
            return (React.createElement("div", { key: category },
                React.createElement("div", { className: "skill-category-heading" }, category),
                React.createElement("div", { className: "skills-row" }, items.map(function (item) { return (React.createElement(SkillItem, { key: item, name: item })); }))));
        }))));
}
exports["default"] = About;
