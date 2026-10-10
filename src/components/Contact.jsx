import { useState } from 'react';

/**
 * Contact Component
 * -----------------
 * Offers clean contact placeholders (Email, GitHub, LinkedIn) that Rasha can update.
 * Includes an educational form that demonstrates controlled inputs in React without
 * falsely claiming messages are sent when no backend is wired up.
 */
export default function Contact() {
  // Educational form state (controlled components)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Rather than faking a success email dispatch, explain frontend reality to the user:
    setSubmissionFeedback(
      `Form demonstrated successfully with name "${formData.name}". Since this is a frontend-only site without a backend service (like Python/FastAPI or Formspree), messages are not sent over the internet yet.`
    );
  };

  const contactLinks = [
    {
      title: "Email",
      placeholder: "rashafthma9896@gmail.com",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      note: "Update with your genuine email address",
    },
    {
      title: "GitHub Profile",
      placeholder: "https://github.com/rashafthma",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      note: "Update with your genuine GitHub URL",
    },
    {
      title: "LinkedIn Profile",
      placeholder: "https://linkedin.com/in/[your-username]",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      note: "Update with your genuine LinkedIn URL",
    },
  ];

  return (
    <section id="contact" className="section-padding futuristic-grid-bg">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <span>//</span>
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-description">
            Feel free to connect regarding software development opportunities, learning collaborations, or project ideas.
          </p>
        </div>

        <div className="row g-4">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {contactLinks.map((item, index) => (
                <div key={index} className="futuristic-card p-4">
                  <div className="card-tech-corner"></div>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ color: 'var(--accent-primary)' }}>
                      {item.icon}
                    </div>
                    <h3 className="h6 text-white mb-0">{item.title}</h3>
                  </div>

                  <div className="p-2 rounded-2 mt-2" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
                    <code style={{ color: 'var(--accent-primary)', fontSize: '0.88rem', wordBreak: 'break-all' }}>
                      {item.placeholder}
                    </code>
                  </div>

                  <p className="small mb-0 mt-2 text-muted" style={{ fontSize: '0.78rem' }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Form Demo & Educational Note */}
          <div className="col-lg-7">
            <div className="futuristic-card p-4 h-100 d-flex flex-column justify-content-between">
              <div className="card-tech-corner"></div>

              <div>
                <h3 className="h5 text-white mb-2">Send a Direct Message</h3>
                <p className="small mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Interactive form demonstration showing controlled component state in React.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="contact-name" className="form-label form-label-custom">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Doe"
                      className="form-control"
                      style={{
                        backgroundColor: '#0e121a',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-main)',
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contact-email" className="form-label form-label-custom">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="form-control"
                      style={{
                        backgroundColor: '#0e121a',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-main)',
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contact-message" className="form-label form-label-custom">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="form-control"
                      style={{
                        backgroundColor: '#0e121a',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-main)',
                      }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-cyan w-100">
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>

                {/* Educational submission notice */}
                {submissionFeedback && (
                  <div className="alert mt-3 p-3 rounded-2 small" style={{ backgroundColor: 'rgba(72, 217, 245, 0.08)', border: '1px solid var(--accent-primary)', color: 'var(--text-main)' }}>
                    <div className="fw-semibold text-cyan mb-1" style={{ color: 'var(--accent-primary)' }}>
                      ℹ️ Educational Architecture Note:
                    </div>
                    {submissionFeedback}
                  </div>
                )}
              </div>

              {/* Developer note */}
              <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                <p className="small text-muted mb-0" style={{ fontSize: '0.78rem' }}>
                  💡 <strong>Mentor Note:</strong> To make this form deliver real emails directly to your inbox, you can later connect it to a free form endpoint like Formspree, EmailJS, or build your own Python backend with FastAPI/Flask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
