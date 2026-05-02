import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="terminal-section-shell terminal-section-contact"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border-muted)',
      }}
    >
      <div
        ref={ref}
        className="terminal-panel terminal-panel-contact"
        style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
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
          05. {t('nav.contact')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="terminal-heading"
          style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-fg)',
            marginBottom: '16px',
          }}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontSize: '15px',
            color: 'var(--color-fg-muted)',
            lineHeight: 1.7,
            marginBottom: '48px',
          }}
        >
          {t('contact.subtitle')}
        </motion.p>

        {/* Link cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/daniel-cordoba/"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-canvas)',
              color: 'var(--color-fg)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'border-color 0.15s, background 0.15s, color 0.15s',
              minWidth: '180px',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.borderColor = '#0a66c2';
              el.style.backgroundColor = 'rgba(10,102,194,0.06)';
              el.style.color = '#58a6ff';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'var(--color-canvas)';
              el.style.color = 'var(--color-fg)';
            }}
          >
            <Linkedin size={18} />
            {t('contact.linkedin')}
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@DaniCCardenas"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-canvas)',
              color: 'var(--color-fg)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              minWidth: '180px',
              justifyContent: 'center',
              transition: 'border-color 0.15s, background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.borderColor = '#ff4d4d';
              el.style.backgroundColor = 'rgba(255,77,77,0.08)';
              el.style.color = '#ff6b6b';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'var(--color-canvas)';
              el.style.color = 'var(--color-fg)';
            }}
          >
            <Youtube size={18} />
            {t('contact.youtube')}
          </a>

          {/* TheContent */}
          <a
            href="https://www.thecontent.ai/creators/DaniCCardenas"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-canvas)',
              color: 'var(--color-fg)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              minWidth: '180px',
              justifyContent: 'center',
              transition: 'border-color 0.15s, background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.borderColor = '#f59e0b';
              el.style.backgroundColor = 'rgba(245,158,11,0.08)';
              el.style.color = '#fbbf24';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'var(--color-canvas)';
              el.style.color = 'var(--color-fg)';
            }}
          >
            <ExternalLink size={18} />
            {t('contact.thecontent')}
          </a>

          {/* Email */}
          <a
            href="mailto:daniel@daniccardenas.com"
            className="terminal-link-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-canvas)',
              color: 'var(--color-fg)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'border-color 0.15s, background 0.15s, color 0.15s',
              minWidth: '180px',
              justifyContent: 'center',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--color-accent)';
              el.style.backgroundColor = 'rgba(88,166,255,0.06)';
              el.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--color-border)';
              el.style.backgroundColor = 'var(--color-canvas)';
              el.style.color = 'var(--color-fg)';
            }}
          >
            <Mail size={18} />
            {t('contact.email')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
