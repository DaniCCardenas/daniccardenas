import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border-muted)',
        padding: '40px 24px 56px',
        background: 'linear-gradient(180deg, rgba(13,17,23,0.35), rgba(13,17,23,0.88))',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px 24px',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            color: 'var(--color-fg-subtle)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
          }}
        >
          © {year} {t('footer.copyright')}
        </p>

        <p style={{ fontSize: '12px', color: 'var(--color-fg-subtle)' }}>
          {t('footer.built')}
        </p>
      </div>
    </footer>
  );
}
