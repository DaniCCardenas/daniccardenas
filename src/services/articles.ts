import { mockArticles, type Article } from '../data/articles';

const API_BASE = '/api/articles';

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
    const data = (await response.json()) as Article[];
    return Array.isArray(data) ? data : mockArticles;
  } catch {
    return mockArticles;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`${API_BASE}/${slug}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.status}`);
    }
    const data = (await response.json()) as Article;
    return data;
  } catch {
    return mockArticles.find(article => article.slug === slug) ?? null;
  }
}
