import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [state, handleSubmit] = useForm('mqabjzgo');

  useEffect(() => {
    if (state.succeeded) {
      toast.success(' Message sent successfully!', { autoClose: 3000 });
      
    }

    if (state.errors && state.errors.length > 0) {
      toast.error(' Something went wrong. Please try again.');
    }
  }, [state.succeeded, state.errors]);

  return (
    <section className="mb-5" id="contact">
      <h2 className="mb-4 text-primary">Contact</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-warning" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
