import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section id="about" style={{ padding: '96px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ position: 'sticky', top: '80px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              fontWeight: 600,
            }}
          >
            01. {t('about.title')}
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--color-fg)',
            }}
          >
            {t('about.title')}
          </h2>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p style={{ color: 'var(--color-fg-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            {t('about.p1')}
          </p>
          <p style={{ color: 'var(--color-fg-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            {t('about.p2')}
          </p>
          <p style={{ color: 'var(--color-fg-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
            {t('about.p3')}
          </p>

          {/* Links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://www.linkedin.com/in/daniel-cordoba/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'transparent',
                color: 'var(--color-fg)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-accent)';
                el.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border)';
                el.style.color = 'var(--color-fg)';
              }}
            >
              LinkedIn →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
