"use strict";
exports.__esModule = true;
var _3d_card_1 = require("../components/3d-card");
var link_1 = require("next/link");
function Projects() {
    return (React.createElement("section", { id: "projects", className: "project-section" },
        React.createElement("div", { className: "section-heading" }, "Projects"),
        React.createElement("div", { className: "projects-grid" }, [
            {
                title: "Employee Performance Tracker",
                description: "Developed a secure performance tracking system using Java, Spring Boot, and MySQL. The platform features an admin dashboard for real-time insights, reducing evaluation time and employs data analysis to improve accuracy.",
                tags: ["Java", "Spring Boot", "JavaScript", "MySQL"],
                githubLink: "https://github.com/ahiraniket/Employee-Performance-Tracker",
                websiteLink: "",
                imageUrl: "../images/projects/employeeperformancetracker.png"
            },
            {
                title: "API Directory",
                description: "Created a web application using J2EE, JavaScript, and MySQL, providing access to a customized directory of 250+ APIs. Enhanced application speed and scalability, handling over 1000 requests by optimizing database queries and implementing caching.",
                tags: ["J2EE", "Spring Boot", "JavaScript", "MySQL"],
                githubLink: "https://github.com/ahiraniket/api_directory",
                websiteLink: "",
                imageUrl: "../images/projects/apid1.png"
            },
            {
                title: "WeatherNow",
                description: "WeatherNow is a web application that displays real-time weather data for any city, including temperature, weather type, humidity, and wind speed. It uses the OpenWeatherMap API for weather data and the Unsplash API for dynamic city images.",
                tags: ["HTML5", "CSS3", "JavaScript", "API"],
                githubLink: "https://github.com/ahiraniket/weather-app",
                websiteLink: "https://ahiraniket.github.io/weather-app/",
                imageUrl: "../images/projects/weathernow.png"
            },
            {
                title: "To-Do List",
                description: "Todo List is a web app that helps users manage tasks efficiently. It features task creation, editing, completion tracking, and deletion, with data persistence using local storage. Built with React, it offers a user-friendly interface and responsive design.",
                tags: ["React", "TypeScript", "HTML5", "CSS3"],
                githubLink: "https://github.com/ahiraniket/todo-list-app",
                websiteLink: "https://ahiraniket.github.io/todo-list-app/",
                imageUrl: "../images/projects/todolist.png"
            },
            {
                title: "Recipe Browser",
                description: "This Swift-based iOS app allows users to browse dessert recipes, displaying ingredients, measurements, and instructions. It fetches data from the MealDB API, using SwiftUI for UI and MVVM architecture for structure.",
                tags: ["Swift", "SwiftUI", "URLSession", "MVVM"],
                githubLink: "https://github.com/ahiraniket/ios-recipe-browser",
                websiteLink: "",
                imageUrl: "../images/projects/recipe.png"
            },
            {
                title: "Alexa for Banking",
                description: "Developed a voice-operated smart assistant for banking tasks using Python, AWS, and NLP techniques. Achieved 80%+ voice recognition accuracy, leveraging NLTK for natural language processing to enhance user experience and automate banking processes.",
                tags: ["Python", "AWS", "Natural Language Processing"],
                githubLink: "https://github.com/ahiraniket/ML-projects",
                websiteLink: "",
                imageUrl: "../images/projects/alexa.png"
            },
            {
                title: "CineSuggest",
                description: "Built a movie recommendation system in Python, utilizing Scikit-learn and Pandas. Implemented classification and clustering models, including KNN and Logistic Regression, achieving 85%+ prediction accuracy to provide personalized movie suggestions.",
                tags: ["Python", "Scikit-learn", "Pandas", "ML"],
                githubLink: "https://github.com/ahiraniket/ML-projects",
                websiteLink: "",
                imageUrl: "../images/projects/cinesuggest.png"
            },
        ].map(function (project, index) { return (React.createElement(_3d_card_1.CardContainer, { key: index, className: "inter-var" },
            React.createElement(_3d_card_1.CardBody, { className: "project-card-body" },
                React.createElement(_3d_card_1.CardItem, { translateZ: "100", className: "project-title" }, project.title),
                React.createElement(_3d_card_1.CardItem, { as: "p", translateZ: "90", className: "project-description" }, project.description),
                React.createElement("div", { className: "project-tags" },
                    project.tags.map(function (tag, tagIndex) { return (React.createElement(_3d_card_1.CardItem, { key: tagIndex, translateZ: 50, className: "project-tag" }, tag)); }),
                    React.createElement(_3d_card_1.CardItem, { translateZ: "70", className: "project-image-container" },
                        React.createElement("img", { src: project.imageUrl, height: 1000, width: 1000, className: "project-image", alt: project.title + " thumbnail" }))),
                React.createElement("div", { className: "project-links" },
                    project.githubLink && (React.createElement(_3d_card_1.CardItem, { translateZ: 70, as: link_1["default"], href: project.githubLink, target: "__blank", className: "project-button" },
                        React.createElement("i", { className: "fa-brands fa-github" }))),
                    project.websiteLink && (React.createElement(_3d_card_1.CardItem, { translateZ: 70, as: link_1["default"], href: project.websiteLink, target: "__blank", className: "project-link-icon" },
                        React.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" }))))))); }))));
}
exports["default"] = Projects;
