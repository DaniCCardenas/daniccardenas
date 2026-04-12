import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, BadgeCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Certifications() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const [mvpLogoUnavailable, setMvpLogoUnavailable] = useState(false);

  const azureBadgeImages = [
    {
      src: '/azure-developer-associate-600x600.png',
      title: t('certifications.azure_badges.developer_title'),
      subtitle: t('certifications.azure_badges.developer_subtitle'),
    },
    {
      src: '/badge-azure-solutions-architect-expert.png',
      title: t('certifications.azure_badges.architect_title'),
      subtitle: t('certifications.azure_badges.architect_subtitle'),
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border-muted)',
        borderBottom: '1px solid var(--color-border-muted)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
          02. {t('certifications.title')}
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
          {t('certifications.title')}
        </h2>
        <p style={{ color: 'var(--color-fg-muted)', fontSize: '15px', marginBottom: '36px', maxWidth: '680px' }}>
          {t('certifications.subtitle')}
        </p>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-canvas)',
              padding: '24px',
              gridColumn: '1 / -1',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr)',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-success)' }}>
                <BadgeCheck size={18} />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>{t('certifications.mvp_title')}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: '1 1 320px' }}>
                  <p style={{ margin: '0 0 14px', fontSize: '15px', color: 'var(--color-fg-muted)', maxWidth: '680px', lineHeight: 1.7 }}>
                    {t('certifications.mvp_subtitle')}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid rgba(63,185,80,0.35)',
                      backgroundColor: 'rgba(63,185,80,0.09)',
                      color: 'var(--color-success)',
                    }}
                  >
                    {t('certifications.mvp_badge')}
                  </span>
                </div>

                <div
                  style={{
                    flex: '0 1 280px',
                    minHeight: '96px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-muted)',
                    background: 'linear-gradient(135deg, rgba(63,185,80,0.08), rgba(31,111,235,0.06))',
                    padding: '16px',
                  }}
                >
                  {!mvpLogoUnavailable ? (
                    <img
                      src="/mvp.png"
                      alt={t('certifications.mvp_badge')}
                      style={{ maxWidth: '100%', maxHeight: '64px', objectFit: 'contain' }}
                      onError={() => setMvpLogoUnavailable(true)}
                    />
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-success)',
                      }}
                    >
                      {t('certifications.mvp_badge')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-canvas)',
              padding: '24px',
              gridColumn: '1 / -1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', color: 'var(--color-accent)' }}>
              <Award size={18} />
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>{t('certifications.azure_title')}</h3>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '14px', color: 'var(--color-fg-muted)', lineHeight: 1.7 }}>{t('certifications.azure_subtitle')}</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
              }}
            >
              {azureBadgeImages.map(badge => (
                <div
                  key={badge.src}
                  style={{
                    border: '1px solid var(--color-border-muted)',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(88,166,255,0.04)',
                    padding: '14px',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      minHeight: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <img
                      src={badge.src}
                      alt={badge.title}
                      style={{ maxWidth: '100%', maxHeight: '96px', objectFit: 'contain' }}
                    />
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 700, color: 'var(--color-fg)' }}>
                    {badge.title}
                  </p>
                  <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.6, color: 'var(--color-fg-muted)' }}>
                    {badge.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
