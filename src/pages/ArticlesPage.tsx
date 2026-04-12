import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getArticles } from '../services/articles';
import type { Article } from '../data/articles';

export default function ArticlesPage() {
  const { t } = useTranslation();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <section style={{ padding: '112px 24px 80px', maxWidth: '1100px', margin: '0 auto' }}>
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
        05. {t('articles.title')}
      </p>
      <h1 style={{ margin: 0, fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em' }}>{t('articles.title')}</h1>
      <p style={{ color: 'var(--color-fg-muted)', fontSize: '15px', marginTop: '10px', marginBottom: '36px' }}>
        {t('articles.subtitle')}
      </p>

      <div style={{ display: 'grid', gap: '14px' }}>
        {articles.map(article => (
          <article
            key={article.id}
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-surface)',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0, fontSize: '20px', lineHeight: 1.3 }}>{article.title}</h2>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-fg-subtle)', fontSize: '12px' }}>
                {article.readTime}
              </span>
            </div>
            <p style={{ color: 'var(--color-fg-muted)', margin: '10px 0 14px' }}>{article.excerpt}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {article.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    border: '1px solid rgba(88,166,255,0.2)',
                    backgroundColor: 'rgba(88,166,255,0.08)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={`/articles/${article.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-accent)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              {t('articles.read_more')} <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
