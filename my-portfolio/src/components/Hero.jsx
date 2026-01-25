import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>
        <h1>Ayushi Vispute</h1>
        <h3>Web Developer | React Enthusiast</h3>
        <p>
            I am a passionate web developer skilled in HTML, CSS, JavaScript, and
            React. I love building responsive, user-friendly, and real-world
            applications.
          </p>
      </div>

        <div className="hero-buttons">
            <a
                href="/Ayushi Vispute Resume.pdf"
                download
                className="btn-primary"
              >
              Download Resume
              </a>
              <button
              className="btn-outline"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>
            
        </div>


      <div className="hero-image">
        <div className="glow-circle">
          <img src={profile} alt="Ayushi Vispute" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
