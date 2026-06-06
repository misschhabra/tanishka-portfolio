import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Alex Morgan — Home">
            <span aria-hidden="true">◆</span> Alex Morgan
          </Link>

          <nav aria-label="Primary" className="primary-nav">
            <ul role="list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "nav-link active", "aria-current": "page" }}
                    inactiveProps={{ className: "nav-link" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={dark}
            >
              {dark ? "☀" : "☾"}
            </button>
            <button
              type="button"
              className="icon-btn menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="hamburger" aria-hidden="true">
                <span /><span /><span />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className="mobile-nav">
            <ul role="list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "nav-link active", "aria-current": "page" }}
                    inactiveProps={{ className: "nav-link" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
          <ul role="list" className="social-list" aria-label="Social media">
            <li><a href="https://github.com" rel="noopener noreferrer" target="_blank" aria-label="GitHub profile">GitHub</a></li>
            <li><a href="https://linkedin.com" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn profile">LinkedIn</a></li>
            <li><a href="https://twitter.com" rel="noopener noreferrer" target="_blank" aria-label="Twitter profile">Twitter</a></li>
          </ul>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
}
