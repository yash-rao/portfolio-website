import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="project-section">
      <div className="section-heading">Projects</div>
      <div className="projects-grid">
        {[
          {
            "title": "Tuberculosis Detection Using Chest X-Ray",
            "description": "Built an end-to-end deep learning pipeline to detect Tuberculosis (TB) and Pneumonia using transfer learning (ResNet18, ResNet34, DenseNet121) on chest X-ray datasets (DICOM & JPEG). Developed a Streamlit web application for live image upload, model prediction, and Grad-CAM heatmap visualization to improve model transparency. Achieved high AUC-ROC and F1-scores using benchmarking and hyperparameter tuning. Enabled explainable AI with Grad-CAM and evaluated model performance using ROC, F1-score, and Confusion Matrix.",
            "tags": ["PyTorch", "Streamlit", "Transfer Learning", "Grad-CAM", "Deep Learning"],
            "githubLink": "https://github.com/yash-rao/Tuberculosis-detection-using-Chest-X-Ray", 
            "websiteLink": "", 
            "imageUrl": "../images/projects/tbxray.png"
          },
          {
            "title": "iOS Application (Freelancing Project)",
            "description": "Developed native iOS apps using Swift, focusing on clean architecture (MVC/MVVM), type safety, and performance optimization. Integrated RESTful APIs, CoreData, and UserDefaults. Used SwiftUI/UIKit for UI and async/await for efficiency. Built and deployed via Xcode, Git, and TestFlight.",
            "tags": ["Swift", "SwiftUI", "UIKit", "Xcode", "MVVM", "CoreData"],
            "githubLink": "",
            "websiteLink": "",
            "imageUrl": "../images/projects/iosapp.png"
          },
          {
            "title": "Ecommerce Microservices Platform (.NET)",
            "description": "Developed a distributed backend system using .NET 8 Web API with Product, Order, and Auth microservices communicating via RESTful APIs. Implemented JWT-based authentication, used MongoDB/PostgreSQL/Redis for data storage and caching. Containerized services with Docker Compose and validated endpoints via Postman.",
            "tags": [".NET 8", "Microservices", "JWT", "MongoDB", "Redis", "PostgreSQL", "Docker"],
            "githubLink": "https://github.com/yash-rao/Microservices_Intercommunication_using_ASP.NET",
            "websiteLink": "https://github.com/yash-rao/Microservices_Intercommunication_using_ASP.NET",
            "imageUrl": "../images/projects/ecommerce.png"
          }
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
