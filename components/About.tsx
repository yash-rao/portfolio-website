"use client"; 
interface SkillItemProps {
  name: string;
}

function SkillItem({ name }: SkillItemProps) {
  const imageSrc = `../images/skills/${name.toLowerCase().replace(/\s+/g, "").replace(/[\(\)\-]/g, "")}.png`;

  return (
    <div className="skill-item">
      <img src={imageSrc} alt={name} className="skill-logo" />
      <span className="skill-text">{name}</span>
    </div>
  );
}
export default function About() {
  const skills = {
    Languages: ["Java", "Python", "C++", "C Sharp", "JavaScript",  "TypeScript", "HTML", "CSS",  "SQL"],
    "Libraries & Frameworks": [
      "Spring Boot", "Hibernate", "Maven", "AngularJS", "ReactJS", "Next.js", "Node.js", "Kafka", "JUnit", "Mocha", "Redux"],
    Database: ["MySQL", "MongoDB", "PostgreSQL", "AWS", "GCP", "Cassandra"],
    Tools: ["Git", "GitHub", "Docker", "Kubernetes", "Selenium", "Postman", "Jenkins", "Linux", "SonarQube", "JIRA", "Figma"]
  };
  return (
    <section id="about" className="about-section">
      <div className="section-heading">About Me</div>
      <div className="about-container">
        <div className="about-left">
          <div className="profile-picture-wrapper">
            <img src="../images/sample-avatar.jpg" alt="Profile Picture" className="profile-picture" />
          </div>
        </div>
        <div className="about-right">
          <p className="about-description">
          My professional journey in software engineering began in 2021, driven by a deep passion for technology and problem-solving. With a Master&apos;s in Computer Software Engineering from Arizona State University and a Bachelor&apos;s in Computer Engineering from Gujarat Technological University, I&apos;ve honed my skills through impactful experiences. At Softvan, I engineered a Personal Cloud Storage System, and at Axisray, I collaborated on designing scalable web applications and integrating RESTful APIs. My role as a Research Assistant at ASU involved working on the Living Repository Initiative with Oxford University, where I improved data accuracy and efficiency. I thrive on transforming complex ideas into elegant solutions, consistently delivering innovative and effective results. My commitment to continuous learning and excellence fuels my drive to push the boundaries of technology.
          </p>
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
