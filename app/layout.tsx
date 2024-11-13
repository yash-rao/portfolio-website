import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniket Ahir | Software Engineer & Full Stack Developer",
  description: "Aniket Ahir - Software Engineer with experience in Full Stack Development, Cloud Solutions, and Product Management.",
  keywords: "Aniket Ahir, Software Engineer, Full Stack Developer, Cloud Solutions, Product Management, Next.js, TypeScript, React, Node.js, JavaScript, HTML, CSS, Python, AWS, Azure, Docker, Kubernetes, CI/CD, RESTful APIs, GraphQL, DevOps, Agile Development, Frontend Developer, Backend Developer, Microservices, Distributed Systems, Machine Learning, Data Science, Data Engineering, Artificial Intelligence, Cloud Infrastructure, Web Development, Mobile Development, Software Architecture, Software Design, JavaScript Frameworks, TypeScript Developer, Cloud-native Applications, Database Management, PostgreSQL, MongoDB, Firebase, SQL, NoSQL, Test-Driven Development, Web App Security, UX/UI Design, Web Performance Optimization, Cross-platform Development, Full-stack JavaScript, Open Source Contributor, Software Development Life Cycle, Git, GitHub, Software Engineer Portfolio, Tech Stack, Web Applications, SaaS, Serverless Architecture, Frontend Frameworks, Backend Frameworks, Cloud Computing, Continuous Integration, Continuous Delivery, JavaScript ES6, TypeScript Best Practices, Modern Web Technologies, PWA (Progressive Web Apps), UI/UX Principles, Tech Enthusiast, Software Solutions, System Design, Cloud Migration, REST APIs, API Development, Frontend Architecture, Backend Architecture, Distributed Computing, Agile Methodologies, Scrum, Agile Scrum Master, Enterprise Applications, Digital Transformation, Cloud DevOps, Web Application Development, Responsive Design, Business Analysis, Product Development, Product Management Tools, Web and Mobile Development, DevOps Engineer, Software Automation, Agile Engineering, Full Stack Development Portfolio",
  openGraph: {
    title: "Aniket Ahir | Software Engineer",
    description: "Explore my portfolio to see my work in Full Stack Development and Product Management.",
    url: "https://aniketahir.vercel.app",
    images: [
      {
        url: "https://aniketahir.vercel.app/images/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Aniket Ahir - Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aniket Ahir",
              "jobTitle": "Software Engineer",
              "url": "https://aniketahir.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/aniketahir/",
                "https://github.com/ahiraniket/",
                "mailto:aaahir@asu.edu"
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
