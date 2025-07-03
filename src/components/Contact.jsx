import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [state, handleSubmit] = useForm('mqabjzgo');

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully!', { autoClose: 3000 });
    }
    if (state.errors && state.errors.length > 0) {
      toast.error('Something went wrong. Please try again.');
    }
  }, [state.succeeded, state.errors]);

  return (
    <section className="mb-5" id="contact">
      <div className="container">
        <h2 className="text-primary mb-4 text-center">Contact</h2>

        <div className="row d-flex align-items-stretch">
          {/* Form Column */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3">Send a Message</h5>
                <form onSubmit={handleSubmit} className="flex-grow-1">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" id="message" rows="4" className="form-control" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning w-100 mt-auto" disabled={state.submitting}>
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info Column */}
          {/* Info Column */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold mb-3">Get in Touch</h5>
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:20bscnithish@gmail.com">20bscnithish@gmail.com</a></p>
                  <p className="mb-2"><strong>Phone:</strong> +91 9344862714</p>
                  <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nithish-c2525" target="_blank" rel="noopener noreferrer">linkedin.com/in/nithish-c2525</a></p>
                  <p className="mb-0"><strong>GitHub:</strong> <a href="https://github.com/Nithish3309m" target="_blank" rel="noopener noreferrer">github.com/Nithish3309m</a></p>
                </div>

                <div className="mt-4 p-3 bg-light border-start border-4 border-warning rounded shadow-sm text-center">
                  <h6 className="fw-bold text-dark mb-1">Thank You!</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
                    Thank you for visiting my portfolio. Feel free to connect anytime!                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
