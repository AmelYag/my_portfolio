import React from "react";
import "./Projects.css";
import barirta from "../images/barirta.jpg";
import C from "../images/C.PNG";
import p from "../images/p.PNG";
import U from "../images/u.PNG";

const projects = [
  {
    title: "Restaurant Website",
    description: "A modern restaurant website with a menu and reservation system.",
    image: barirta,
    link: "https://amelyag.github.io/restaurant/"
  },
  {
    title: "Student Registration System",
    description: "Student management system using PHP and MySQL.",
    image: C,
    link: "https://amelyag.github.io/register_student/a.html"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Bootstrap.",
    image: p,
    link: "#"
  },
  {
  title: "Immobilier Website",
  description: "Un site immobilier moderne avec HTML, CSS, JS, et TypeScript.",
  image: U, // صورة معاينة للموقع
  link: "https://AmelYag.github.io/immob/"
},

];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-card">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-timeline position-relative">
          <div className="timeline-line"></div>
          {projects.map((project, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="content">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    🔗 View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
