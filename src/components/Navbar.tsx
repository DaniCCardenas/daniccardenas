import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es');
  };

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.certifications'), href: '#certifications' },
    { label: t('nav.focus'), href: '#focus' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
        background: scrolled ? 'rgba(13,17,23,0.86)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border-muted)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.18)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '24px' }}>
          {/* Logo */}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate('/');
              window.setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 40);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 12px',
              borderRadius: '999px',
              border: '1px solid rgba(88, 166, 255, 0.18)',
              background: 'linear-gradient(180deg, rgba(22,27,34,0.84), rgba(13,17,23,0.94))',
              boxShadow: 'inset 0 1px 0 rgba(230,237,243,0.04)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'var(--color-fg)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '999px', backgroundColor: 'var(--color-accent)' }} />
            <span style={{ color: 'var(--color-accent)' }}>dc</span>
            <span style={{ color: 'var(--color-fg-muted)' }}>/</span>
            <span>portfolio</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  padding: '6px 12px',
                  fontSize: '14px',
                  color: 'var(--color-fg-muted)',
                  textDecoration: 'none',
                  borderRadius: '999px',
                  transition: 'color 0.15s, background 0.15s, border-color 0.15s',
                  fontWeight: 500,
                  border: '1px solid transparent',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--color-fg)';
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(88,166,255,0.08)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(88,166,255,0.18)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = 'var(--color-fg-muted)';
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.borderColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              title="Toggle language"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: 'rgba(22,27,34,0.9)',
                color: 'var(--color-fg-muted)',
                cursor: 'pointer',
                transition: 'color 0.15s, border-color 0.15s',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.color = 'var(--color-fg)';
                el.style.borderColor = 'var(--color-fg-muted)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.color = 'var(--color-fg-muted)';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              {i18n.language.startsWith('es') ? 'EN' : 'ES'}
            </button>

            {/* GitHub link */}
            <a
              href="https://github.com/daniccardenas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: 'rgba(22,27,34,0.9)',
                color: 'var(--color-fg-muted)',
                transition: 'color 0.15s, border-color 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.color = 'var(--color-fg)';
                el.style.borderColor = 'var(--color-fg-muted)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.color = 'var(--color-fg-muted)';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              <Github size={16} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className="mobile-menu-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: 'rgba(22,27,34,0.9)',
                color: 'var(--color-fg-muted)',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'rgba(13,17,23,0.98)',
            borderBottom: '1px solid var(--color-border-muted)',
            padding: '12px 24px 20px',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              style={{
                display: 'block',
                padding: '10px 0',
                fontSize: '15px',
                color: 'var(--color-fg-muted)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-border-muted)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
