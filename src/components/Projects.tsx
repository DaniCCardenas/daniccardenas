import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section id="projects" style={{ padding: '96px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Heading */}
      <div style={{ marginBottom: '56px' }}>
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
          04. {t('projects.title')}
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--color-fg)',
                marginBottom: '8px',
              }}
            >
              {t('projects.title')}
            </h2>
            <p style={{ color: 'var(--color-fg-muted)', fontSize: '15px' }}>
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '18px',
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            style={{
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              background: 'linear-gradient(180deg, rgba(22,27,34,0.96), rgba(13,17,23,0.96))',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
            }}
            whileHover={{
              borderColor: 'rgba(88,166,255,0.18)',
              backgroundColor: 'var(--color-surface-hover)',
              y: -4,
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(88,166,255,0.85), rgba(245,158,11,0.4), transparent)',
              }}
            />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--color-fg)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  maxWidth: '14ch',
                }}
              >
                {t(project.titleKey)}
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0, marginTop: '2px' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    style={{ color: 'var(--color-fg-muted)', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-fg-muted)'; }}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-fg-muted)',
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              {t(project.descriptionKey)}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '4px 9px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(88,166,255,0.06)',
                    border: '1px solid rgba(88,166,255,0.16)',
                    color: 'rgba(230,237,243,0.72)',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '8px',
                  width: 'fit-content',
                  padding: '10px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(88,166,255,0.18)',
                  backgroundColor: 'rgba(88,166,255,0.08)',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'background 0.15s, border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = 'rgba(88,166,255,0.14)';
                  el.style.borderColor = 'rgba(88,166,255,0.32)';
                  el.style.color = '#79b8ff';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = 'rgba(88,166,255,0.08)';
                  el.style.borderColor = 'rgba(88,166,255,0.18)';
                  el.style.color = 'var(--color-accent)';
                }}
              >
                {t('projects.view_live')}
                <ExternalLink size={14} />
              </a>
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
