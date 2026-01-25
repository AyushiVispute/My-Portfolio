function About() {
  return (
    <section className="about-page">
      <h2 className="about-title">
        <span>About Me</span>
      </h2>

      <p className="about-description">
        I am a motivated and detail-oriented Computer Science student with a
        strong foundation in web development and frontend technologies.
        Passionate about building user-friendly applications, writing clean and
        efficient code, and continuously learning new technologies to solve
        real-world problems.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>B.E. Computer Science</p>
          <span>CGPA: 9.23</span>
        </div>

        <div className="about-card">
          <h3>🏆 Achievements</h3>
          <p>Ranked in SkillRack</p>
          <span>1500+ Problems Solved</span>
        </div>

        <div className="about-card">
          <h3>💻 Experience</h3>
          <p>Frontend Developer</p>
          <span>Hands-on Project Work</span>
        </div>

        <div className="about-card">
          <h3>🧪 Internship</h3>
          <p>Web Development Intern</p>
          <span>Real-world Applications</span>
        </div>
      </div>
    </section>
  );
}

export default About;
