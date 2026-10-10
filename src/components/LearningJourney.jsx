/**
 * LearningJourney Component
 * -------------------------
 * Outlines the core knowledge areas Rasha is currently exploring.
 * These are presented truthfully as areas of active study, without
 * fake dates, percentages, or invented certifications.
 */
export default function LearningJourney() {
  const learningAreas = [
    {
      title: "Python Programming",
      detail: "Learning syntax, data structures, functions, object-oriented concepts, and core algorithmic problem solving.",
      status: "Active Study",
    },
    {
      title: "HTML & CSS Fundamentals",
      detail: "Structuring semantic web pages, understanding the box model, Flexbox, Grid, and responsive layout foundations.",
      status: "Active Study",
    },
    {
      title: "JavaScript Fundamentals",
      detail: "Exploring ES6+ syntax, DOM manipulation, functions, arrays, event handling, and asynchronous programming logic.",
      status: "Active Study",
    },
    {
      title: "Bootstrap & Responsive Design",
      detail: "Utilizing modern CSS frameworks, utility classes, and grid systems for mobile-first, cross-device responsiveness.",
      status: "Active Study",
    },
    {
      title: "React Components & State",
      detail: "Understanding JSX, component architecture, passing data with props, and managing local component state with useState.",
      status: "Active Study",
    },
    {
      title: "Building Practical Applications",
      detail: "Synthesizing frontend and backend concepts into real-world applications step by step.",
      status: "Active Study",
    },
  ];

  return (
    <section id="journey" className="section-padding futuristic-grid-bg">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <span>//</span>
            <span>GROWTH &amp; PROGRESS</span>
          </div>
          <h2 className="section-heading">My Learning Journey</h2>
          <p className="section-description">
            The concepts and technologies I am currently learning as part of my Python Full Stack training.
          </p>
        </div>

        {/* Journey Timeline Cards */}
        <div className="row g-4">
          {learningAreas.map((area, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="futuristic-card h-100 p-4">
                <div className="card-tech-corner"></div>

                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="small text-muted" style={{ fontFamily: 'var(--font-mono)' }}>
                    Track 0{index + 1}
                  </span>
                  <span 
                    className="status-badge status-in-progress"
                    style={{ fontSize: '0.72rem' }}
                  >
                    <span className="status-dot"></span>
                    {area.status}
                  </span>
                </div>

                <h3 className="h5 text-white mb-2">{area.title}</h3>
                
                <p className="small mb-0" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {area.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
