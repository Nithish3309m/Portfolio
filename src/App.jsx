import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Internship from './components/Internship';


function App() {
  return (

    <div className="full-bg text-white">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#internship">Internship</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-white py-5 border-bottom border-secondary">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Column: Text */}
      <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
        <h1 className="fw-bold">Hi, I'm <span className="text-warning">NITHISH.C</span></h1>
        <p className="lead">Passionate Web Developer | React | Node.js | PHP</p>
        <a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          download
          className="btn btn-warning btn-lg mt-3"
        >
          Download Resume
        </a>
      </div>

      {/* Right Column: Image */}
      <div className="col-md-4 text-center">
        <img
          src={`${import.meta.env.BASE_URL}image.jpeg`}
          alt="Profile"
          className="rounded-circle shadow"
          width="220"
          height="220"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
</header>


      <main className="container mt-5">
        <ToastContainer position="top-right" autoClose={3000} />
        <section id="about" className="py-5">
          <div className="section-card">
            <About />
          </div>
        </section>
        <section id="projects" className="py-5">
          <div className="section-card">
            <Projects />
          </div>
        </section>
        <section id="skills" className="py-5">
          <div className="section-card">
            <Skills />
          </div>
        </section>
         <section id="internship" className="py-5">
          <div className="section-card">
           <Internship/>
          </div>
        </section>
        <section id="contact" className="py-5">
          <div className="section-card">
            <Contact />
          </div>
        </section>

      </main>

      <footer className="bg-dark text-center text-white py-3 mt-5">
        <small>&copy; 2025 NITHISH</small>
      </footer>
    </div>
  )
}

export default App