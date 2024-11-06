import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="project-section">
      <div className="section-heading">Projects</div>
      <div className="projects-grid">
        {[
          {
            title: "Employee Performance Tracker",
            description: "Developed a secure performance tracking system using Java, Spring Boot, and MySQL. The platform features an admin dashboard for real-time insights, reducing evaluation time and employs data analysis to improve accuracy.",
            tags: ["Java", "Spring Boot", "JavaScript", "MySQL"],
            githubLink: "https://github.com/",
            websiteLink: "https://project1.com/",
            imageUrl: "../images/projects/p1.png",
          },
          {
            title: "API Directory",
            description: "Created a web application using J2EE, JavaScript, and MySQL, providing access to a customized directory of 250+ APIs. Enhanced application speed and scalability, handling over 1000 requests by optimizing database queries and implementing caching.",
            tags: ["J2EE", "Spring Boot", "JavaScript", "MySQL"],
            githubLink: "https://github.com/",
            websiteLink: "",
            imageUrl: "../images/projects/p1.png",
          },
          {
            title: "Alexa for Banking",
            description: "Developed a voice-operated smart assistant for banking tasks using Python, AWS, and NLP techniques. Achieved 80%+ voice recognition accuracy, leveraging NLTK for natural language processing to enhance user experience and automate banking processes.",
            tags: ["Python", "AWS", "Natural Language Processing"],
            githubLink: "https://github.com/",
            websiteLink: "",
            imageUrl: "../images/projects/p1.png",
          },
          {
            title: "CineSuggest",
            description: "Built a movie recommendation system in Python, utilizing Scikit-learn and Pandas. Implemented classification and clustering models, including KNN and Logistic Regression, achieving 85%+ prediction accuracy to provide personalized movie suggestions.",
            tags: ["Python", "Scikit-learn", "Pandas", "ML"],
            githubLink: "https://github.com/",
            websiteLink: "",
            imageUrl: "../images/projects/p1.png",
          },
          {
            title: "WeatherNow",
            description: "WeatherNow is a web application that displays real-time weather data for any city, including temperature, weather type, humidity, and wind speed. It uses the OpenWeatherMap API for weather data and the Unsplash API for dynamic city images.",
            tags: ["HTML5", "CSS3", "JavaScript", "API"],
            githubLink: "https://github.com/",
            websiteLink: "",
            imageUrl: "../images/projects/p1.png",
          },
          {
            title: "To-Do List",
            description: "Todo List is a web app that helps users manage tasks efficiently. It features task creation, editing, completion tracking, and deletion, with data persistence using local storage. Built with React, it offers a user-friendly interface and responsive design.",
            tags: ["React", "TypeScript", "HTML5", "CSS3"],
            githubLink: "https://github.com/",
            websiteLink: "",
            imageUrl: "../images/projects/p1.png",
          },
          {
            title: "Recipe Browser",
            description: "This Swift-based iOS app allows users to browse dessert recipes, displaying ingredients, measurements, and instructions. It fetches data from the MealDB API, using SwiftUI for UI and MVVM architecture for structure.",
            tags: ["Swift", "SwiftUI", "URLSession", "MVVM"],
            githubLink: "",
            websiteLink: "",
            imageUrl: "../images/projects/p1.png",
          },
          
          // Add more projects here...
        ].map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="project-card-body">
              <CardItem
                translateZ="100"
                className="project-title"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="90"
                className="project-description"
              >
                {project.description}
              </CardItem>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <CardItem key={tagIndex} translateZ={50} className="project-tag">
                    {tag}
                  </CardItem>
                ))}
                <CardItem translateZ="70" className="project-image-container">
                <img
                  src={project.imageUrl}
                  height={1000}
                  width={1000}
                  className="project-image"
                  alt={`${project.title} thumbnail`}
                />
              </CardItem>
              </div>
              <div className="project-links">
              {project.githubLink && (
                  <CardItem
                    translateZ={70}
                    as={Link}
                    href={project.githubLink}
                    target="__blank"
                    className="project-button"
                  >
                    <i className="fa-brands fa-github"></i>
                  </CardItem>
                )}
                {project.websiteLink && (
                  <CardItem
                    translateZ={70}
                    as={Link}
                    href={project.websiteLink}
                    target="__blank"
                    className="project-link-icon"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </CardItem>
                )}
                
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
