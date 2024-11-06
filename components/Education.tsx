"use client";
import React, { useEffect } from "react";
import $ from "jquery";

const Education = () => {
  useEffect(() => {
    const initParticles = () => {
      const canvas = document.getElementById("container") as HTMLCanvasElement;
      const clone = document.getElementById("blurCanvasBottom") as HTMLCanvasElement;
      const cloneCtx = clone.getContext("2d");
      const ctx = canvas.getContext("2d");

      if (!ctx || !cloneCtx) {
        console.error("Failed to get canvas context");
        return;
      }

      let ww = $(window).width() || 0;
      let wh = $(window).height() || 0;
      canvas.width = ww;
      canvas.height = wh;

      const partCount = 100;
      const particles: Array<{
        color: string;
        x: number;
        y: number;
        direction: { x: number; y: number };
        vx: number;
        vy: number;
        radius: number;
        float: () => void;
        changeDirection: (axis: 'x' | 'y') => void;
        boundaryCheck: () => void;
        draw: () => void;
      }> = [];

      class Particle {
        color: string;
        x: number;
        y: number;
        direction: { x: number; y: number };
        vx: number;
        vy: number;
        radius: number;

        constructor() {
          this.color = "rgba(255,255,225," + Math.random() + ")";
          this.x = Math.floor(Math.random() * ww);
          this.y = Math.floor(Math.random() * wh);
          this.direction = {
            x: -1 + Math.random() * 2,
            y: -1 + Math.random() * 2,
          };
          this.vx = 0.3 * Math.random();
          this.vy = 0.3 * Math.random();
          this.radius = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
        }

        float() {
          this.x += this.vx * this.direction.x;
          this.y += this.vy * this.direction.y;
        }

        changeDirection(axis: "x" | "y") {
          this.direction[axis] *= -1;
        }

        boundaryCheck() {
          if (this.x >= ww || this.x <= 0) this.changeDirection("x");
          if (this.y >= wh || this.y <= 0) this.changeDirection("y");
        }

        draw() {
          ctx!.beginPath(); // Non-null assertion to tell TypeScript it's safe
          ctx!.fillStyle = this.color;
          ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx!.fill();
        }
      }

      function clearCanvas() {
        cloneCtx!.clearRect(0, 0, ww, wh); // Non-null assertion
        ctx!.clearRect(0, 0, ww, wh); // Non-null assertion
      }

      function createParticles() {
        for (let i = 0; i < partCount; i++) {
          particles.push(new Particle());
        }
      }

      function animateParticles() {
        clearCanvas();
        particles.forEach((p) => {
          p.float();
          p.boundaryCheck();
          p.draw();
        });
        cloneCtx!.drawImage(canvas, 0, 0); // Non-null assertion
        requestAnimationFrame(animateParticles);
      }

      $(window).on("resize", function () {
        ww = $(window).width() || 0;
        wh = $(window).height() || 0;
        canvas.width = ww;
        canvas.height = wh;
        clearCanvas();
        particles.length = 0;
        createParticles();
      });

      createParticles();
      animateParticles();
    };

    initParticles();
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="education-blur-container">
        <canvas className="education-canvas" id="blurCanvasBottom"></canvas>
      </div>
      <canvas className="education-particles-container" id="container" role="main"></canvas>

      <div className="education-content-container">
        <div className="section-heading">Education</div>
        <div className="education-timeline">
          {[
            {
              year: "2022",
              degree: "Master of Science",
              major: "Computer Science",
              institution: "Arizona State University",
              logo: "../images/edu/asu.png",
            },
            {
              year: "2018",
              degree: "Bachelor of Engineering",
              major: "Computer Engineering",
              institution: "Gujarat Technological University",
              logo: "../images/edu/gtu.png",
            },
            {
              year: "2014",
              degree: "High School",
              major: "",
              institution: "Rachana School",
              logo: "../images/edu/rachana.png",
            },
          ].map((edu, index) => (
            <div key={index} className="education-timeline-item">
              <div className="education-year">{edu.year}</div>
              <div className="education-logo">
                <img src={edu.logo} alt={`${edu.institution} logo`} />
              </div>
              <div className="education-details">
                <h3 className="education-degree-title">{edu.degree}</h3>
                <h4 className="education-degree-major">{edu.major}</h4>
                <p className="education-institution-name">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
