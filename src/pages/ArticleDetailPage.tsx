import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug } from '../services/articles';
import type { Article } from '../data/articles';

export default function ArticleDetailPage() {
  const { t } = useTranslation();
  const { slug = '' } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticleBySlug(slug).then(setArticle);
  }, [slug]);

  if (!article) {
    return (
      <section style={{ padding: '112px 24px 80px', maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/articles" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
          <ArrowLeft size={14} /> {t('articles.back')}
        </Link>
        <h1 style={{ marginTop: '24px' }}>{t('articles.not_found_title')}</h1>
        <p style={{ color: 'var(--color-fg-muted)' }}>{t('articles.not_found_description')}</p>
      </section>
    );
  }

  return (
    <article style={{ padding: '112px 24px 80px', maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/articles" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
        <ArrowLeft size={14} /> {t('articles.back')}
      </Link>

      <h1 style={{ margin: '20px 0 8px', fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
        {article.title}
      </h1>
      <p style={{ margin: 0, color: 'var(--color-fg-subtle)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
        {new Date(article.publishedAt).toLocaleDateString()} · {article.readTime}
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '18px', marginBottom: '22px' }}>
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

      <div
        style={{
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--color-surface)',
          padding: '24px',
          color: 'var(--color-fg-muted)',
          lineHeight: 1.85,
          whiteSpace: 'pre-line',
          fontSize: '16px',
        }}
      >
        {article.content}
      </div>
    </article>
  );
}
