import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

/**
 * Projects Component
 * ------------------
 * Renders the gallery of genuine projects.
 * 
 * Notice how clean this component is:
 * Instead of duplicating code for every project card, we import our `projects`
 * array from `src/data/projects.js` and use JavaScript's `.map()` method to create
 * a `ProjectCard` for each entry in the array.
 */
export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <span>//</span>
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-description">
            Real projects built during my learning process. As I complete more practical applications, they will be added here.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Futuristic "Next Project" Placeholder Card to show room for growth */}
          <div className="col-lg-6">
            <div 
              className="futuristic-card h-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
              style={{ borderStyle: 'dashed', backgroundColor: 'rgba(23, 28, 39, 0.4)' }}
            >
              <div 
                className="rounded-circle p-3 mb-3"
                style={{ background: 'rgba(72, 217, 245, 0.08)', border: '1px dashed var(--accent-primary)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <h3 className="h5 text-white mb-2">Next Project Coming Soon</h3>
              <p className="small mb-0" style={{ color: 'var(--text-secondary)', maxWidth: '360px' }}>
                Currently building new applications in my Python Full Stack training. To add a project, simply update the <code style={{ color: 'var(--accent-primary)' }}>src/data/projects.js</code> file!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
