/**
 * Education Component
 * -------------------
 * Displays Rasha's academic degree and current technical training.
 * Contains clear, editable placeholders for institution names and dates
 * so Rasha can customize them easily in this file.
 */
export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <span>//</span>
            <span>ACADEMICS &amp; TRAINING</span>
          </div>
          <h2 className="section-heading">Education &amp; Training</h2>
          <p className="section-description">
            My formal computer science foundation alongside current full stack development training.
          </p>
        </div>

        <div className="row g-4">
          {/* 1. Formal Degree Entry */}
          <div className="col-lg-6">
            <div className="futuristic-card h-100 p-4">
              <div className="card-tech-corner"></div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="section-badge mb-0" style={{ fontSize: '0.75rem' }}>
                  Higher Education
                </span>
                <span className="placeholder-tag">
                  Completed
                </span>
              </div>

              <h3 className="h4 text-white mb-2">BSc Computer Science</h3>
              
              <div className="mb-3">
                <p className="small mb-1 label-subtle">Institution:</p>
                <div className="d-inline-block p-2 rounded-2 border border-secondary border-opacity-25" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <code style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
                    [Your College / University Name]
                  </code>
                </div>
              </div>

              <div className="mb-3">
                <p className="small mb-1 label-subtle">Graduation Date:</p>
                <div className="d-inline-block p-2 rounded-2 border border-secondary border-opacity-25" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <code style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>
                    [Graduation Year, e.g. 2024]
                  </code>
                </div>
              </div>

              <p className="small mb-0 mt-3 pt-3 border-top border-secondary border-opacity-25" style={{ color: 'var(--text-secondary)' }}>
                Covered core computer science subjects, computing principles, data structures, and algorithmic logic.
              </p>
            </div>
          </div>

          {/* 2. Professional Training Entry */}
          <div className="col-lg-6">
            <div className="futuristic-card h-100 p-4">
              <div className="card-tech-corner"></div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="section-badge mb-0" style={{ fontSize: '0.75rem', borderColor: 'rgba(167, 139, 250, 0.3)', color: 'var(--accent-secondary)' }}>
                  Professional Training
                </span>
                <span className="status-badge status-in-progress" style={{ fontSize: '0.72rem' }}>
                  <span className="status-dot"></span>
                  In Progress
                </span>
              </div>

              <h3 className="h4 text-white mb-2">Python Full Stack Training</h3>

              <div className="mb-3">
                <p className="small mb-1 label-subtle">Training Organization:</p>
                <div className="d-inline-block p-2 rounded-2 border border-secondary border-opacity-25" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <code style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
                    [Training Institute / Platform Name]
                  </code>
                </div>
              </div>

              <div className="mb-3">
                <p className="small mb-1 label-subtle">Duration / Dates:</p>
                <div className="d-inline-block p-2 rounded-2 border border-secondary border-opacity-25" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <code style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>
                    [Ongoing / Training Period]
                  </code>
                </div>
              </div>

              <p className="small mb-0 mt-3 pt-3 border-top border-secondary border-opacity-25" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive practical training focusing on Python, HTML, CSS, JavaScript, Bootstrap, React, and building end-to-end applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
