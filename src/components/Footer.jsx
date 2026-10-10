/**
 * Footer Component
 * ----------------
 * Minimal, futuristic footer showing Rasha's name, personal motto,
 * and the current year generated dynamically via JavaScript.
 */
// Calculate current year once at module level for pure component rendering
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="py-4 border-top" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-color)' }}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
          <div>
            <span className="fw-bold text-white me-2" style={{ fontFamily: 'var(--font-mono)' }}>
              &lt;RASHA /&gt;
            </span>
            <span className="small text-muted">
              © {CURRENT_YEAR} Rasha Fathima. All rights reserved.
            </span>
          </div>

          <div>
            <p className="small mb-0" style={{ color: 'var(--accent-primary)', fontStyle: 'italic', fontFamily: 'var(--font-mono)' }}>
              &quot;Learning, building, and improving one project at a time.&quot;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
