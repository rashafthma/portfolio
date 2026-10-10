/**
 * ProjectCard Component
 * ---------------------
 * A reusable card that receives project data via `props`.
 * 
 * Props accepted:
 * - `project`: An object with title, description, status, technologies, githubUrl, liveUrl.
 * 
 * Notice how conditional rendering is used:
 * If `project.githubUrl` or `project.liveUrl` is empty, the button is not shown,
 * preventing broken or empty links on the website.
 */
export default function ProjectCard({ project }) {
  const { title, description, status, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="futuristic-card h-100 d-flex flex-column justify-content-between p-4">
      <div className="card-tech-corner"></div>

      <div>
        {/* Header: Status Badge */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="small text-muted" style={{ fontFamily: 'var(--font-mono)' }}>
            Project #{project.id}
          </span>
          <span className={`status-badge ${status === 'In Progress' ? 'status-in-progress' : 'status-completed'}`}>
            <span className="status-dot"></span>
            {status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="h4 text-white mb-2">{title}</h3>

        {/* Project Description */}
        <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-4">
          <span className="d-block small text-muted mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
            Tech Stack:
          </span>
          <div className="d-flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-pill cyan">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links (Conditionally Rendered) */}
      <div className="pt-3 border-top border-secondary border-opacity-25">
        <div className="d-flex flex-wrap gap-2 align-items-center">
          {/* GitHub Repo Button - Only renders if a real URL is provided */}
          {githubUrl ? (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cyan-outline btn-sm py-1 px-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>Code Repo</span>
            </a>
          ) : null}

          {/* Live Demo Button - Only renders if a real URL is provided */}
          {liveUrl ? (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cyan btn-sm py-1 px-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          ) : null}

          {/* If neither link is provided yet, show a transparent indicator */}
          {!githubUrl && !liveUrl && (
            <span className="placeholder-tag">
              Links will appear once repository is linked
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
