import React from 'react';
import "./skills.css";
import TechnicalSkills from './TechnicalSkills';
import Backend from './SoftSkills';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Lvl</span>
      <div className="skills__container container grid">
        <TechnicalSkills />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;