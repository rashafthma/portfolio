/**
 * Skills Component
 * ----------------
 * Displays Rasha's genuine learning technologies categorized into clean groups.
 * Does NOT display fake proficiency percentages or inaccurate 'expert' ratings.
 * Structured with simple arrays so Rasha can add new skills as she learns them.
 */
export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Building responsive, modern, and interactive user interfaces.",
      skills: [
        { name: "HTML", tag: "Markup" },
        { name: "CSS", tag: "Styling" },
        { name: "JavaScript", tag: "Core Logic" },
        { name: "Bootstrap", tag: "CSS Framework" },
        { name: "React", tag: "UI Library" },
      ],
      color: "cyan",
    },
    {
      category: "Programming",
      description: "Writing structured logic, algorithms, and backend programs.",
      skills: [
        { name: "Python", tag: "Core Language" },
      ],
      color: "violet",
    },
    {
      category: "Development Tools",
      description: "Software and environments used for daily development.",
      skills: [
        { name: "Visual Studio Code", tag: "Code Editor" },
      ],
      color: "cyan",
    },
  ];

  return (
    <section id="skills" className="section-padding futuristic-grid-bg">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <span>&lt;/&gt;</span>
            <span>SKILLS &amp; TECHNOLOGIES</span>
          </div>
          <h2 className="section-heading">My Tech Stack</h2>
          <p className="section-description">
            Technologies I am actively learning and applying in projects. Honest skills without exaggerated percentages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4">
          {skillCategories.map((group, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="futuristic-card h-100 d-flex flex-column justify-content-between p-4">
                <div className="card-tech-corner"></div>
                
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="h5 text-white mb-0">{group.category}</h3>
                    <span 
                      className="status-badge"
                      style={{ 
                        fontSize: '0.7rem',
                        backgroundColor: group.color === 'cyan' ? 'rgba(72, 217, 245, 0.1)' : 'rgba(167, 139, 250, 0.1)',
                        color: group.color === 'cyan' ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                        border: `1px solid ${group.color === 'cyan' ? 'rgba(72, 217, 245, 0.3)' : 'rgba(167, 139, 250, 0.3)'}`
                      }}
                    >
                      <span className="status-dot"></span>
                      Learning
                    </span>
                  </div>

                  <p className="small mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {group.description}
                  </p>

                  {/* Skills Tag Cloud */}
                  <div className="d-flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className={`tech-pill ${group.color === 'cyan' ? 'cyan' : 'violet'}`}
                        style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                      >
                        <span className="fw-medium text-white">{skill.name}</span>
                        <span className="opacity-75 small">· {skill.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                  <span className="small text-muted" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    Status: In Progress
                  </span>
                  <span className="small" style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    Active Training
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
