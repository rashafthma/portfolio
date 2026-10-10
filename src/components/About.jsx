/**
 * About Component
 * ---------------
 * An authentic overview of Rasha's academic background, current training,
 * core motivations, interests, and aspirations.
 */
export default function About() {
  const highlights = [
    {
      title: "Academic Grounding",
      desc: "Graduated with a BSc in Computer Science, building core problem-solving fundamentals.",
      accent: "cyan",
    },
    {
      title: "Hands-On Training",
      desc: "Currently undergoing Python Full Stack training to master both backend and frontend technologies.",
      accent: "violet",
    },
    {
      title: "Future Direction",
      desc: "Aiming to build reliable software applications and progressively explore artificial intelligence.",
      accent: "cyan",
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <span>//</span>
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="section-heading">About Me</h2>
          <p className="section-description">
            A genuine look into my background, my journey into tech, and what drives my curiosity.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Main Narrative Column */}
          <div className="col-lg-7">
            <div className="futuristic-card h-100 p-4">
              <div className="card-tech-corner"></div>
              
              <h3 className="h4 text-white mb-3">
                Building a Strong Foundation in Software Development
              </h3>
              
              <p className="mb-3" style={{ lineHeight: '1.8' }}>
                Hello! I am Rasha Fathima. Having completed my Bachelor of Science (BSc) in Computer Science, 
                I developed a deep curiosity about how software solves everyday challenges. 
                To transition from foundational theory into real-world engineering, I am currently enrolled in 
                intensive <strong>Python Full Stack training</strong>.
              </p>

              <p className="mb-3" style={{ lineHeight: '1.8' }}>
                Right now, my day-to-day focus is on mastering core programming logic with Python, creating responsive and 
                intuitive interfaces with HTML, CSS, JavaScript, and Bootstrap, and structuring modern UI components with React. 
                I believe in steady, hands-on learning—writing code, debugging errors, and understanding the principles behind every line.
              </p>

              <p className="mb-4" style={{ lineHeight: '1.8' }}>
                My career goal is to start as a dedicated software developer, write clean and maintainable code, 
                and gradually expand my horizons into <strong>AI development</strong>. Outside of writing code, 
                I enjoy exploring new technologies and watching movies.
              </p>

              {/* Personal Interests Badges */}
              <div className="pt-2 border-top border-secondary border-opacity-25">
                <span className="small text-uppercase fw-semibold me-3" style={{ color: 'var(--accent-primary)', letterSpacing: '0.05em' }}>
                  Personal Interests:
                </span>
                <span className="tech-pill me-2 mb-2">💻 Programming</span>
                <span className="tech-pill me-2 mb-2">🚀 Technology Trends</span>
                <span className="tech-pill mb-2">🎬 Movies</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100 justify-content-between">
              {highlights.map((item, index) => (
                <div key={index} className="futuristic-card p-3 flex-grow-1">
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-3 p-2" 
                      style={{ 
                        background: item.accent === 'cyan' ? 'rgba(72, 217, 245, 0.1)' : 'rgba(167, 139, 250, 0.1)',
                        border: `1px solid ${item.accent === 'cyan' ? 'rgba(72, 217, 245, 0.3)' : 'rgba(167, 139, 250, 0.3)'}`,
                        color: item.accent === 'cyan' ? 'var(--accent-primary)' : 'var(--accent-secondary)'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="h6 text-white mb-1">{item.title}</h4>
                      <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
