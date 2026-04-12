export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readTime: string;
}

export const mockArticles: Article[] = [
  {
    id: 'art-001',
    slug: 'arquitectura-rag-azure-openai',
    title: 'Arquitectura RAG en Azure OpenAI: patrones prácticos',
    excerpt: 'Cómo diseñar una arquitectura Retrieval-Augmented Generation robusta para entornos empresariales en Azure.',
    publishedAt: '2026-02-20',
    tags: ['Azure OpenAI', 'RAG', 'AI Search'],
    readTime: '8 min',
    content:
      'En este artículo reviso una arquitectura RAG de producción en Azure. El enfoque combina Azure OpenAI para generación, Azure AI Search para recuperación semántica y una capa de orquestación con Azure Functions. También veremos estrategias de chunking, versionado de embeddings y evaluación continua con datasets de validación.\n\nEl objetivo es maximizar grounding y minimizar alucinaciones con métricas accionables.',
  },
  {
    id: 'art-002',
    slug: 'gobierno-power-platform-a-escala',
    title: 'Gobierno de Power Platform a escala empresarial',
    excerpt: 'Un marco simple para definir entornos, DLP, ALM y observabilidad en Power Platform.',
    publishedAt: '2026-02-10',
    tags: ['Power Platform', 'Governance', 'ALM'],
    readTime: '6 min',
    content:
      'Power Platform crece rápido en las organizaciones; sin gobierno, el riesgo también crece. Propongo una guía con tres capas: guardrails de plataforma, procesos de ALM y reporting operativo. Incluye recomendaciones concretas para entornos dev/test/prod, conectores y políticas DLP según riesgo.\n\nEl foco es habilitar sin bloquear.',
  },
  {
    id: 'art-003',
    slug: 'azure-functions-para-apis-de-contenido',
    title: 'Azure Functions para APIs de contenido: listado y detalle',
    excerpt: 'Diseño de endpoints para servir artículos de forma eficiente y lista para escalar.',
    publishedAt: '2026-01-28',
    tags: ['Azure Functions', 'TypeScript', 'API'],
    readTime: '5 min',
    content:
      'Cuando construimos un blog técnico headless, una API sencilla es suficiente para empezar. En este ejemplo implementamos dos endpoints: uno para listado y otro para detalle por slug. Añadimos estrategia de paginación, cache headers y contratos estables para el frontend.\n\nDespués, la misma base sirve para conectar un CMS o base de datos.',
  },
];
