import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="project-section">
      <div className="section-heading">Projects</div>
      <div className="projects-grid">
        {[
          {
            title: "CodeLights Game",
            description: "Developed educational coding game where kids have to use code blocks to make traffic light work properly. Build block code editor using blockly and traffic light using canvas.",
            tags: ["JavaScript", "Blocky","Phasor","Canvas"],
            githubLink: "https://github.com/yash-rao/CodeLights",
            websiteLink: "https://yash-rao.github.io/CodeLights/",
            imageUrl: "../images/projects/codelight.png",
          },
          {
            title: "Fashion Ecommerce Site",
            description: "Developed a full-stack fashion e-commerce website that offers personalized clothing recommendations based on users' body shapes. Integrated Python Django for backend functionality, including user authentication, dynamic product listings, and order management. Implemented responsive UI using HTML, CSS, and JavaScript, enhancing user experience and enabling seamless navigation across devices. Deployed the site on GitHub Pages for live demonstration and user access.",
            tags: ["Python","Django","MySQL","HTML","CSS","JavaScript"],
            githubLink: "https://github.com/yash-rao/IFashion_Ecom_Site",
            websiteLink: "",
            imageUrl: "../images/projects/fashion.png",
          },
          
          {
            title: "WeatherNow",
            description: "WeatherNow is a web application that displays real-time weather data for any city, including temperature, weather type, humidity, and wind speed. It uses the OpenWeatherMap API for weather data and the Unsplash API for dynamic city images.",
            tags: ["HTML5", "CSS3", "JavaScript", "API"],
            githubLink: "https://github.com/yash-rao/WEATHER_APP",
            websiteLink: "",
            imageUrl: "../images/projects/weathernow.png",
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
