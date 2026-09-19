import { GitBranch, Link2, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Left: Logo + tagline */}
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.3rem' }}>
            DK.
          </div>
          <p className="footer-text">Devadharshini K. · Aspiring Data Scientist &amp; AI Developer</p>
        </div>

        {/* Center: Quick links */}
        <nav aria-label="Footer navigation">
          <div className="footer-links">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: Socials */}
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <a
            href="https://github.com/DEVADHARSHINI200608"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub profile"
          >
            <GitBranch size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/devadharshini-k-82b7ba314"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn profile"
          >
            <Link2 size={16} />
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginTop: '1.5rem', paddingTop: '1.25rem', textAlign: 'center' }}>
        <p className="footer-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
          © {year} Devadharshini K. Built with
          <Heart size={12} color="var(--accent-violet-light)" aria-hidden="true" />
          using React + Vite
        </p>
      </div>
    </footer>
  );
}
