import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cloud, BrainCircuit, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const areas = [
  {
    key: 'cloud',
    icon: Cloud,
    color: '#58a6ff',
    bgColor: 'linear-gradient(180deg, rgba(88,166,255,0.12), rgba(13,17,23,0.72))',
    borderColor: 'rgba(88,166,255,0.2)',
  },
  {
    key: 'ai',
    icon: BrainCircuit,
    color: '#8fd3ff',
    bgColor: 'linear-gradient(180deg, rgba(143,211,255,0.12), rgba(13,17,23,0.72))',
    borderColor: 'rgba(143,211,255,0.2)',
  },
  {
    key: 'powerplatform',
    icon: Zap,
    color: '#ffa657',
    bgColor: 'linear-gradient(180deg, rgba(255,166,87,0.12), rgba(13,17,23,0.72))',
    borderColor: 'rgba(255,166,87,0.2)',
  },
];

export default function FocusAreas() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section
      id="focus"
      style={{
        padding: '96px 24px',
        background: 'linear-gradient(180deg, rgba(22,27,34,0.9), rgba(13,17,23,0.9))',
        borderTop: '1px solid var(--color-border-muted)',
        borderBottom: '1px solid var(--color-border-muted)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            03. {t('focus.title')}
          </p>
          <h2
            style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--color-fg)',
              marginBottom: '12px',
            }}
          >
            {t('focus.title')}
          </h2>
          <p style={{ color: 'var(--color-fg-muted)', fontSize: '15px', maxWidth: '520px', margin: '0 auto' }}>
            {t('focus.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  border: `1px solid ${area.borderColor}`,
                  background: area.bgColor,
                  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                }}
                whileHover={{ y: -6 }}
              >
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: area.color,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    border: `1px solid ${area.borderColor}`,
                    backgroundColor: 'rgba(13,17,23,0.42)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    color: area.color,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t(`focus.${area.key}.title`)}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(230,237,243,0.72)',
                    lineHeight: 1.75,
                  }}
                >
                  {t(`focus.${area.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
