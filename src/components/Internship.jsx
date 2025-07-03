// src/components/Internship.jsx
import React from 'react';

export default function Internship() {
  return (
    <section className="mb-5" id="internship">
      <div className="container">
        <div className="row align-items-stretch">

          {/* Internship Column */}
          <div className="col-md-6 mb-4 d-flex">
            <div className="card border-0 shadow-sm w-100 h-100">
              <div className="card-body">
                <h2 className="text-primary mb-4">Internship</h2>
                <p className="mb-2">
                  I worked as a <strong>Full Stack Developer Intern</strong> where I contributed to both frontend and backend development, gaining hands-on experience in real-world projects.
                </p>
                <h5 className="card-title fw-bold mt-2">Full Stack Developer Intern</h5>
                <h6 className="card-text">
                  Nimatooz Smile Mobility, Aranthangi <span >| Dec 2024 – Jun 2025</span>
                </h6>

                <ul className="mt-3">
                  <li>Developed responsive landing pages using HTML, CSS, JavaScript</li>
                  <li>Worked on SEO processes to improve search visibility</li>
                  <li>Assisted in backend development and deployment workflow</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificate Column */}
          <div className="col-md-6 mb-4 d-flex">
            <div className="card border-0 shadow-sm p-3 w-100 h-100 d-flex flex-column justify-content-between">
              <div className="d-flex flex-column align-items-center">
                <h2 className="text-primary mb-4">Certificate</h2>
                <h5 className="card-title fw-bold text-center mb-3">
                  Full Stack Development Internship Certificate
                </h5>
                <img
                  src={`${import.meta.env.BASE_URL}internship.jpeg`}
                  alt="Internship Certificate"
                  className="img-fluid shadow-sm mb-3"
                  style={{ maxWidth: '100%', maxHeight: '240px', borderRadius: '8px', objectFit: 'contain' }}
                />
                <a
                  href={`${import.meta.env.BASE_URL}internship certificate.pdf`}
                  download
                  className="btn btn-outline-success"
                >
                  Download Certificate (PDF)
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
