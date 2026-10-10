import { useState } from 'react';

/**
 * Navbar Component
 * ----------------
 * Provides responsive navigation across all sections of the portfolio.
 * Uses React's `useState` hook to track whether the mobile menu is open or closed.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile navigation menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a nav link is clicked (useful on mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar" aria-label="Main navigation">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand navbar-brand-text" href="#home" onClick={closeMenu}>
          <span className="brand-bracket">&lt;</span>
          RASHA
          <span className="brand-bracket"> /&gt;</span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-nav-toggle d-lg-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            // Close icon (X)
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger icon
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Nav Links (Desktop & Collapsible Mobile) */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mobile-nav-menu' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className="nav-link nav-link-custom"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
