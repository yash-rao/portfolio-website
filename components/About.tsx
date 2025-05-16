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
              I&apos;m Yash Barot, a passionate Software Engineer and Full Stack Developer with a strong foundation in cybersecurity, cloud solutions, and AI-driven technologies. Currently pursuing my Master&apos;s in Applied Computer Science at Southeast Missouri State University, I bring a unique blend of academic research and industry experience to my work. With a professional background in Identity and Access Management (IAM) solutions and hands-on expertise in tools like Docker, AWS, and Azure, I specialize in creating secure, scalable, and user-centric applications. My projects, such as an AI-powered job application automation tool and a BLE-based IoT security solution, demonstrate my commitment to innovation and problem-solving. Whether it&apos;s developing robust backend architectures, optimizing frontend experiences, or researching cutting-edge technologies like IoT security, I thrive in collaborative environments that drive impactful solutions. My ultimate goal is to build systems that are not only efficient and secure but also elevate user experiences.
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
