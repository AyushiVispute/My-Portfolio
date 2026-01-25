function Skills() {
  return (
    <section className="skills-page">
      <h2 className="skills-title">
        <span>My Skills</span>
      </h2>

      <div className="skills-cards">
        {/* Frontend */}
        <div className="skills-card blue">
          <h3>Web Development</h3>
          <ul>
            <li>HTML5</li>
             <li>CSS3</li>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Programming */}
        <div className="skills-card purple">
          <h3>Programming</h3>
          <ul>
            <li>C++</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skills-card pink">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Multitasking</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

