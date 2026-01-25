import ridego from "../assets/ridego.png";
import mycraftopia from "../assets/mycraftopia.png";
import api from "../assets/api.png";
import bgremove from "../assets/background.png";
import speech from "../assets/speech.png";

function Projects() {
  return (
    <section className="projects-page">
      <h2 className="projects-title">
      <span>  My Projects</span>
      </h2>

      <div className="projects-grid">

        {/* RideGo */}
        <div className="project-card-f small">
          <img src={ridego} alt="RideGo" />
          <div className="project-body">
            <h3>RideGo</h3>
            <p>Cab booking app with clean and intuitive UI.</p>
            <div className="tech-stack">
              <span>React</span>
              <span>flask</span>
              <span>telwind</span>
            </div>
          </div>
        </div>

        {/* MyCraftopia */}
        <div className="project-card-f small">
          <img src={mycraftopia} alt="MyCraftopia" />
          <div className="project-body">
            <h3>MyCraftopia</h3>
            <p>E-commerce platform for handmade products.</p>
            <div className="tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>css</span>
            </div>
          </div>
        </div>

        {/* API Testing */}
        <div className="project-card-f small">
          <img src={api} alt="API Testing" />
          <div className="project-body">
            <h3>API Testing</h3>
            <p>Tested REST APIs using Postman.</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Flask</span>
              <span>Postman</span>
              <span>API</span>
            </div>
          </div>
        </div>

        {/* Background Removal */}
        <div className="project-card-f small">
          <img src={bgremove} alt="Background Removal" />
          <div className="project-body">
            <h3>Background Removal</h3>
            <p>Automatic image background removal.</p>
            <div className="tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>API</span>
            </div>
          </div>
        </div>

        {/* Speech to Text */}
        <div className="project-card-f small">
          <img src={speech} alt="Speech To Text" />
          <div className="project-body">
            <h3>Speech To Text</h3>
            <p>Converts voice input into text.</p>
            <div className="tech-stack">
              <span>Flask</span>
              <span>React</span>
              <span>Telwind</span>
              <span>Web Speech API</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
