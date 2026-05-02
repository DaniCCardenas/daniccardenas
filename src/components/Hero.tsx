import { useState, type MouseEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Linkedin, Youtube, ArrowDown, User, ExternalLink } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const { t } = useTranslation();
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50, active: false });

  const profilePhotoSrc = '/foto.png';

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setMouseGlow({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
      active: true,
    });
  };

  return (
    <section
      id="hero"
      className="hero-shell"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseGlow(current => ({ ...current, active: false }))}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '132px 24px 88px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid pattern */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(48,54,61,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(48,54,61,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-10%',
          background: `radial-gradient(circle at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(88,166,255,0.18) 0%, rgba(88,166,255,0.08) 12%, transparent 26%)`,
          opacity: mouseGlow.active ? 1 : 0.45,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '18%',
          left: '18%',
          width: '420px',
          height: '420px',
          borderRadius: '999px',
          background: 'radial-gradient(circle, rgba(31,111,235,0.18) 0%, transparent 72%)',
          filter: 'blur(18px)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-120px',
          bottom: '12%',
          width: '340px',
          height: '340px',
          borderRadius: '999px',
          background: 'radial-gradient(circle, rgba(210,153,34,0.12) 0%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1180px', width: '100%', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-terminal-panel"
            style={{
              padding: '40px clamp(24px, 4vw, 44px)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(88,166,255,0.16)',
              background: 'linear-gradient(180deg, rgba(22,27,34,0.92), rgba(13,17,23,0.96))',
              boxShadow: 'var(--shadow-glow)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '38%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(88,166,255,0.9))',
              }}
            />

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                margin: '0 0 18px',
                padding: '7px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(88,166,255,0.18)',
                backgroundColor: 'rgba(88,166,255,0.08)',
                fontSize: '12px',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '999px', backgroundColor: 'var(--color-accent)' }} />
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(46px, 8vw, 88px)',
                fontWeight: 700,
                lineHeight: 0.96,
                letterSpacing: '-0.05em',
                margin: '0 0 18px',
                color: 'var(--color-fg)',
                maxWidth: '10ch',
              }}
            >
              {t('hero.name')}
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: 'clamp(15px, 2vw, 18px)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-accent)',
                margin: '0 0 24px',
                fontWeight: 500,
                padding: '10px 14px',
                borderRadius: '16px',
                background: 'rgba(13,17,23,0.45)',
                border: '1px solid rgba(88,166,255,0.14)',
              }}
            >
              {t('hero.role')}
            </motion.p>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'rgba(230,237,243,0.78)',
                maxWidth: '34rem',
                margin: '0 0 36px',
                lineHeight: 1.72,
              }}
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '28px',
              }}
            >
          <button
            onClick={() => handleScroll('#projects')}
            className="hero-cta-primary"
            style={{
              padding: '12px 20px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(180deg, #2f81f7, #1f6feb)',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.15s, transform 0.1s, box-shadow 0.15s',
              fontFamily: 'var(--font-sans)',
              boxShadow: '0 14px 24px rgba(31,111,235,0.22)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'linear-gradient(180deg, #388bfd, #2f81f7)';
              el.style.boxShadow = '0 18px 30px rgba(31,111,235,0.3)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'linear-gradient(180deg, #2f81f7, #1f6feb)';
              el.style.boxShadow = '0 14px 24px rgba(31,111,235,0.22)';
            }}
          >
            {t('hero.cta_projects')}
          </button>

          <button
            onClick={() => handleScroll('#contact')}
            className="hero-cta-secondary"
            style={{
              padding: '12px 20px',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'rgba(22,27,34,0.74)',
              color: 'var(--color-fg)',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'border-color 0.15s, background 0.15s',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--color-fg-muted)';
              el.style.backgroundColor = 'rgba(88,166,255,0.08)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'rgba(22,27,34,0.74)';
            }}
          >
            {t('hero.cta_contact')}
          </button>
            </motion.div>

            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
            >
          <a
            href="https://www.linkedin.com/in/daniel-cordoba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-link-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-fg-muted)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'color 0.15s, border-color 0.15s, background 0.15s',
              padding: '8px 12px',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'rgba(13,17,23,0.3)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--color-accent)';
              el.style.borderColor = 'rgba(88,166,255,0.28)';
              el.style.backgroundColor = 'rgba(88,166,255,0.08)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--color-fg-muted)';
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'rgba(13,17,23,0.3)';
            }}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="https://www.youtube.com/@DaniCCardenas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hero-link-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-fg-muted)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'color 0.15s, border-color 0.15s, background 0.15s',
              padding: '8px 12px',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'rgba(13,17,23,0.3)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#ff4d4d';
              el.style.borderColor = 'rgba(248,81,73,0.32)';
              el.style.backgroundColor = 'rgba(248,81,73,0.08)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--color-fg-muted)';
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'rgba(13,17,23,0.3)';
            }}
          >
            <Youtube size={16} />
            YouTube
          </a>

          <a
            href="https://www.thecontent.ai/creators/DaniCCardenas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TheContent"
            className="hero-link-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-fg-muted)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'color 0.15s, border-color 0.15s, background 0.15s',
              padding: '8px 12px',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'rgba(13,17,23,0.3)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#f59e0b';
              el.style.borderColor = 'rgba(245,158,11,0.28)';
              el.style.backgroundColor = 'rgba(245,158,11,0.08)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--color-fg-muted)';
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'rgba(13,17,23,0.3)';
            }}
          >
            <ExternalLink size={16} />
            TheContent
          </a>
            </motion.div>
          </motion.div>

          <motion.aside
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-terminal-aside"
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              background: 'linear-gradient(180deg, rgba(17,24,39,0.88), rgba(13,17,23,0.96))',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 'auto -20% 12% auto',
                width: '220px',
                height: '220px',
                borderRadius: '999px',
                background: 'radial-gradient(circle, rgba(88,166,255,0.14), transparent 70%)',
              }}
            />

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  gap: '12px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Daniel Cordoba
                </span>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', backgroundColor: 'var(--color-success)', boxShadow: '0 0 0 6px rgba(63,185,80,0.12)' }} />
              </div>

              <div
                style={{
                  width: '100%',
                  minHeight: '340px',
                  borderRadius: '20px',
                  border: '1px solid rgba(230,237,243,0.08)',
                  background: 'linear-gradient(180deg, rgba(22,27,34,0.72), rgba(13,17,23,0.9))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 1px 0 rgba(230,237,243,0.04)',
                  marginBottom: '20px',
                }}
                title={t('hero.photo_placeholder')}
              >
                {!photoUnavailable ? (
                  <img
                    src={profilePhotoSrc}
                    alt={t('hero.photo_placeholder')}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={() => setPhotoUnavailable(true)}
                  />
                ) : (
                  <User size={52} />
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                {[t('focus.cloud.title'), t('focus.ai.title'), t('focus.powerplatform.title')].map(item => (
                  <div
                    key={item}
                    className="hero-skill-pill"
                    style={{
                      padding: '12px 10px',
                      borderRadius: '16px',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'rgba(22,27,34,0.78)',
                      textAlign: 'center',
                    }}
                  >
                    <span style={{ fontSize: '11px', lineHeight: 1.4, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-mono)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--color-fg-subtle)',
          animation: 'bounce 2s infinite',
          cursor: 'pointer',
        }}
        onClick={() => handleScroll('#about')}
      >
        <ArrowDown size={18} />
      </motion.div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
