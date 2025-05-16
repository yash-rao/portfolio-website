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
        "Assisted in the design and delivery of lectures for a graduate-level course on Artificial Intelligence, focusing on Generative AI and Natural Language Processing.", 
"Developed and presented hands-on coding sessions on text generation and summarization using GPT-3, enabling students to fine-tune models for real-world applications.", 
"Provided one-on-one mentoring and support for students working on projects involving generative models, helping them improve their understanding of model training, hyperparameter tuning, and evaluation.", 
"Reviewed and graded assignments on machine learning algorithms and model performance, ensuring accurate evaluation based on defined metrics such as accuracy, BLEU, and ROUGE scores.", 
"Co-authored research papers on AI-driven text generation techniques, contributing to the development of course materials and class discussions.", 
"Facilitated group discussions on AI ethics and responsible use of generative models, encouraging students to explore the social implications of AI technologies."],
      tags: ["Leadership","Time Management"],
      logo: "../images/work/semo.png"
    },
    {
      employer: "Southeast Missouri State University",
      title: "Student Research Worker",
      date: "Jan 2024 – May 2024",
      location: "Cape Girardeau, MO",
      description: [
        "Conducted research on generative AI models for natural language processing, focusing on text generation and automatic summarization of large document corpora.", 
"Trained GPT-3 based models and fine-tuned them using domain-specific datasets to generate coherent summaries and text based on provided prompts, improving the coherence and relevance of the output.", 
"Evaluated the performance of various generation models using metrics such as BLEU score, ROUGE, and human evaluation, achieving a 15% improvement in summarization accuracy over baseline models.", 
"Developed a prototype of a text summarization tool using the Hugging Face library, allowing users to input articles or papers and receive concise, informative summaries.", 
"Presented research findings at the university’s AI research symposium, highlighting the strengths and weaknesses of generative models in diverse text summarization tasks."],
      tags: ["Generative AI", 
        "Natural Language Processing (NLP)", 
        "Text Generation", 
        "Text Summarization", 
        "GPT-3 Fine-Tuning", 
        "Machine Learning Model Evaluation", 
        "Performance Metrics (BLEU, ROUGE)", 
        "Model Optimization", 
        "Hugging Face Library", 
        "Prototype Development", 
        "Research Presentation", 
        "AI Research Symposium", 
        "Data Preprocessing for Text"],
      logo: "../images/work/semo.png"
    },
    {
      employer: "Tata Consultancy Services",
      title: "Systems Engineer",
      date: "Jul 2022 – Aug 2023",
      location: "Gandhinagar, India",
      description: [
        "Designed and operated highly scalable web services using Java, Spring Boot, and Kubernetes, ensuring 99.5% availability for 80,000+ users",
        "Built privacy-focused distributed systems with event-driven workflows (Apache Kafka, 8000+ messages/sec) to optimize latency. ",
        "User life cycle state management",
        "Integrated OAuth 2.0 & JWT authentication to enhance security across distributed services, ensuring compliance with enterprise IAM standards.",
        "Optimized Redis-based caching strategies, reducing API response times by 40% and improving database read efficiency for high-traffic workloads",
        "Provided OOTB Solution by automating email sending to bulk set of users through developing PowerShell Script."
      ],
      tags: ["Spring Boot",,"SSO","Data Analytics","XML","SailPoint IdentityNow","Git","Powershell","Apache Velocity","Java","Postman","Azure Active Directory","Active Directory"],
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
