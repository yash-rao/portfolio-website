"use client";
import Image from 'next/image'; 

interface SkillItemProps {
  name: string;
}

import { useMemo } from 'react';

function SkillItem({ name }: { name: string }) {
  const key = useMemo(() =>
    name.toLowerCase().replace(/\s+/g, "").replace(/[\(\)\-]/g, ""),
  [name]);

  const imageSrc = `/images/skills/${key}.png`;

  return (
    <div className="skill-item">
      <Image
        src={imageSrc}
        alt={name}
        width={64}
        height={64}
        className="skill-logo"
      />
      <span className="skill-text">{name}</span>
    </div>
  );
}


export default function About() {
  const skills = {
    Languages: ["Java", "Python", "C++", "C Sharp", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    "Libraries & Frameworks": [
      "Spring Boot", "Hibernate", "Maven", "AngularJS", "ReactJS", "Next.js", "Node.js", "Kafka", "JUnit", "Mocha", "Redux"],
    Database: ["MySQL", "MongoDB", "PostgreSQL", "AWS", "GCP"],
    Tools: ["Git", "GitHub", "Docker", "Kubernetes", "Postman", "Jenkins", "Linux"]
  };

  return (
    <section id="about" className="about-section">
      <div className="section-heading">About Me</div>
      <div className="about-container">
        <div className="macos-folder-window">
          <div className="macos-header">
            <div className="macos-controls">
              <span className="macos-button red"></span>
              <span className="macos-button yellow"></span>
              <span className="macos-button green"></span>
            </div>
          </div>
          <div className="about-description">
            <p>
              I&apos;Yash Barot, a passionate Software Developer with a strong foundation in backend development, AI, and machine learning technologies. Currently pursuing my Master's in Applied Computer Science at Southeast Missouri State University, I combine academic research with hands-on industry experience. I specialize in building secure, scalable, and high-performance backend systems using Java Spring Boot. Additionally, I leverage AI/ML techniques to enhance the functionality and efficiency of applications, demonstrating a commitment to innovation through projects like an AI-powered job application automation tool and a BLE-based IoT security solution. With a background in Identity and Access Management (IAM) and a deep understanding of cloud technologies like Docker, AWS, and Azure, I am dedicated to developing solutions that not only meet technical requirements but also provide superior user experiences. I thrive in collaborative environments and am always eager to solve complex problems that drive impactful change.
            </p>
          </div>
        </div>
      </div>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="skill-category-heading">{category}</div>
            <div className="skills-row">
              {items.map((item) => (
                <SkillItem key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
