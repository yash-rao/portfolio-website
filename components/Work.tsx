'use client';
import { useEffect, useState } from 'react';

export default function Work() {
  const workExperiences = [
    {
      employer: "Southeast Missouri State University",
      title: "Graduate Teaching Assistant",
      date: "Aug 2024 – Current",
      location: "Cape Girardeau, MO",
      description: [
        "Supporting professors in course preparation and planning.",
        "Conducting tutorials, workshops, and graded assignments or exams",
      ],
      tags: ["Leadership","Time Management"],
      logo: "../images/work/semo.png"
    },
    {
      employer: "Southeast Missouri State University",
      title: "Student Research Worker",
      date: "Jan 2024 – May 2024",
      location: "Cape Girardeau, MO",
      description: [
        "Analyzed Bluetooth traffic to map specific mouse actions (left-click, right-click, scrolling) with corresponding packet values using an nRF52840 Dongle as a sniffer.",
        "Used an nRF52840 Dongle to capture Bluetooth traffic for a mouse device.",
        "Explored using ESP32 for potential \"mouse emulation\" or \"wireless mouse spoofing.\""
      ],
      tags: ["IOT","Python","ESP32","WireShark","C++","Arduino"],
      logo: "../images/work/semo.png"
    },
    {
      employer: "Tata Consultancy Services",
      title: "Systems Engineer",
      date: "Jul 2022 – Aug 2023",
      location: "Gandhinagar, India",
      description: [
        "Worked in Cyber Security Domain provided solutions related to Identity and Access Management",
        "Developed rules for User Provisioning and De-Provisioning.",
        "User life cycle state management",
        "Engaged with SailPoint IdentityNow, providing IAM SaaS Solution.",
        "Worked on cloud and connectors execution rules.",
        "Access Profiles and Roles Management",
        "Created Transform for Identity attributes.",
        "Automated email sending to bulk set of users through developing PowerShell Script."
      ],
      tags: ["SSO","Data Analytics","XML","SailPoint IdentityNow","Git","Powershell","Apache Velocity","Java","Postman","Azure Active Directory","Active Directory"],
      logo: "../images/work/tcs.png"
    },
    {
      employer: "Virtually Testing Foundation",
      title: "Penetration Testing Intern ",
      date: "Oct 2021 – Dec 2021",
      location: "CA, USA(Remote)",
      description: [
        "Performed vulnerability assessments and penetration testing on 20+ systems using Kali Linux and generated detailed reports for 10+ clients.",
        "Engaged with the cybersecurity community by participating in 5+ industry events and forums."
      ],
      tags: ["Vulnerability Assessment","Penetration Testing","OWASP Top 10","Burpsuite","Nessus","Kali Linux"],
      logo: "../images/work/vtf.png"
    },
    {
      employer: "CyberEQ.io",
      title: "Research Intern ",
      date: "Jul 2021 – Aug 2021",
      location: "Australia(Remote)",
      description: [
        "Actively contributed to teams in Maths/AI/ML, Coding, Astrophysics/Psychology/Cognition, Business Intelligence Analysis, and Cybersecurity",
        "Engaged in practical and research-based tasks requiring interdisciplinary knowledge and technical skills.",
        "Demonstrated exceptional written and verbal communication, teamwork, and independent problem-solving abilities."
      ],
      tags: ["Cyber Security","Research and Analysis","Communication Skills","Project Management","Team Collaboration","Adaptability and Learning"],
      logo: "../images/work/cybereq.png"
    }
  ];

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const tabs = document.querySelector('.tabs');
    const highlighter = document.querySelector('.highlighter') as HTMLElement;
    const activeTabElement = document.querySelector('.tabs .active') as HTMLElement;

    if (tabs && highlighter && activeTabElement) {
      const updateHighlighter = () => {
        const tabRect = activeTabElement.getBoundingClientRect();
        highlighter.style.top = `${activeTabElement.offsetTop}px`;
        highlighter.style.height = `${tabRect.height}px`;
      };

      updateHighlighter();
      window.addEventListener('resize', updateHighlighter);

      return () => {
        window.removeEventListener('resize', updateHighlighter);
      };
    }
  }, [activeTab]);

  const handleTabClick = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(index + 1);
  };

  return (
    <section id="work" className="work-section">
      
      <div className="section-heading">Work Experience</div>
      <div className="work-container">
        <div className="work-tabs tabs">
          <span className="work-highlighter-track"></span> {/* Highlighter track */}
          {workExperiences.map((work, index) => (
            <a
              key={index}
              className={`work-tab work-tab-${index + 1} ${index + 1 === activeTab ? 'active' : ''}`}
              href="#work"
              data-tab={index + 1}
              onClick={(e) => handleTabClick(index, e)}
            >
              {work.employer}
            </a>
          ))}
          <span className="work-highlighter highlighter"></span>
        </div>
        <div className="work-content content">
          {workExperiences.map((work, index) => (
            <div
              key={index}
              className={`work-content__section content__section ${index + 1 === activeTab ? 'visible' : ''}`}
              data-tab={index + 1}
            >
              <div className="work-header">
                <img src={work.logo} alt={`${work.employer} logo`} className="work-logo" />
                <div>
                  <h3 className="work-title">{work.title}</h3>
                  <div className="work-employer">{work.employer}</div>
                </div>
              </div>
              <div className="work-details">{work.date} | {work.location}</div>
              <ul className="work-description">
                {work.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="work-tags">
                {work.tags.map((tag, idx) => (
                  <span key={idx} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
