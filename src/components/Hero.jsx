/**
 * Hero Component
 * --------------
 * The first section visitors see. Features Rasha's authentic introduction,
 * clear call-to-action buttons, and a futuristic code-inspired visual terminal.
 */
export default function Hero() {
  return (
    <section id="home" className="section-padding futuristic-grid-bg">
      <div className="container">
        <div className="row align-items-center g-5 min-vh-75 py-4">
          {/* Left Column: Intro & Call-to-Actions */}
          <div className="col-lg-7">
            <div className="section-badge">
              <span>●</span>
              <span>HELLO, WORLD! I&apos;M</span>
            </div>

            <h1 className="display-4 fw-bold mb-3 text-white">
              Rasha Fathima
            </h1>

            <p className="fs-5 text-cyan fw-medium mb-3" style={{ color: 'var(--accent-primary)' }}>
              Computer Science Graduate | Python Full Stack Trainee
            </p>

            <p className="lead mb-4" style={{ color: 'var(--text-secondary)', maxWidth: '580px', lineHeight: '1.7' }}>
              I&apos;m learning to turn programming concepts into practical applications, exploring frontend development and Python while building projects one step at a time.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="btn-cyan">
                <span>Explore My Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#about" className="btn-cyan-outline">
                <span>About Me</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Subtle Coding-Inspired Futuristic Visual */}
          <div className="col-lg-5">
            <div className="futuristic-terminal">
              {/* Terminal Window Header */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                </div>
                <div className="terminal-title">developer.py</div>
                <div style={{ width: '40px' }}></div>
              </div>

              {/* Terminal Code Content */}
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-comment"># Developer Profile</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-violet">class</span> <span className="terminal-cyan">Developer</span>:
                </div>
                <div className="terminal-line ps-3">
                  <span className="terminal-violet">def</span> <span className="terminal-cyan">__init__</span>(self):
                </div>
                <div className="terminal-line ps-4">
                  self.name = <span className="text-white">&quot;Rasha Fathima&quot;</span>
                </div>
                <div className="terminal-line ps-4">
                  self.degree = <span className="text-white">&quot;BSc Computer Science&quot;</span>
                </div>
                <div className="terminal-line ps-4">
                  self.status = <span className="text-white">&quot;Python Full Stack Trainee&quot;</span>
                </div>
                <div className="terminal-line ps-4">
                  self.current_focus = [
                </div>
                <div className="terminal-line ps-5 text-white">
                  &quot;Python&quot;, &quot;JavaScript&quot;, &quot;React&quot;
                </div>
                <div className="terminal-line ps-4">
                  ]
                </div>
                <div className="terminal-line ps-3">
                  <span className="terminal-violet">def</span> <span className="terminal-cyan">build_future</span>(self):
                </div>
                <div className="terminal-line ps-4">
                  <span className="terminal-violet">return</span> <span className="text-white">&quot;Software Developer &amp; AI Exploration&quot;</span>
                </div>
                <div className="terminal-line mt-3">
                  <span className="terminal-cyan">&gt;&gt;&gt;</span> <span className="text-white">portfolio.status</span>
                  <span className="cursor-blink"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
