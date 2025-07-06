// src/pages/Skills.jsx
import React, { useState } from "react";
import { Container, ProgressBar, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
  FaDatabase, FaCode, FaGitAlt, FaGithub, FaLaptopCode
} from "react-icons/fa";
import './Skills.css';

const allSkills = [
  { name: "HTML", level: 90, category: "Frontend", icon: <FaHtml5 color="#e44d26" /> },
  { name: "CSS", level: 85, category: "Frontend", icon: <FaCss3Alt color="#2965f1" /> },
  { name: "JavaScript", level: 80, category: "Frontend", icon: <FaJs color="#f0db4f" /> },
  { name: "React", level: 75, category: "Frontend", icon: <FaReact color="#61DBFB" /> },
  { name: "Java (OOP)", level: 70, category: "Backend", icon: <FaJava color="#f89820" /> },
  { name: "MySQL", level: 75, category: "Backend", icon: <FaDatabase color="#00758f" /> },
  { name: "C", level: 65, category: "Backend", icon: <FaCode color="#A8B9CC" /> },
  { name: "Git", level: 85, category: "Tools", icon: <FaGitAlt color="#f1502f" /> },
  { name: "GitHub", level: 85, category: "Tools", icon: <FaGithub color="#ffffff" /> },
  { name: "VS Code", level: 90, category: "Tools", icon: <FaLaptopCode color="#007acc" /> },
];

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="skills-section">
      <Container className="skills-box">
        <h2 className="text-center mb-4 text-light">My Skills</h2>

        

        {filteredSkills.map((skill, idx) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

          return (
            <motion.div
              key={idx}
              className="mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              ref={ref}
            >
              <div className="d-flex justify-content-between align-items-center mb-1 text-light">
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span>
                  <strong>{skill.name}</strong>
                </div>
                <span>{inView ? `${skill.level}%` : "0%"}</span>
              </div>
              <ProgressBar
                now={inView ? skill.level : 0}
                variant="info"
                animated
                style={{
                  height: "10px",
                  borderRadius: "20px",
                  transition: "width 1s ease-in-out",
                }}
              />
            </motion.div>
          );
        })}
      </Container>
    </section>
  );
};

export default Skills;
