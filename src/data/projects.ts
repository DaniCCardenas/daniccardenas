export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project1',
    titleKey: 'projects.items.project1.title',
    descriptionKey: 'projects.items.project1.description',
    tags: ['Contenido', 'IA', 'Creators', 'Comunidad'],
    liveUrl: 'https://www.thecontent.ai/creators/DaniCCardenas',
    featured: true,
  },
  {
    id: 'project2',
    titleKey: 'projects.items.project2.title',
    descriptionKey: 'projects.items.project2.description',
    tags: ['Dynamics 365', 'Negocio', 'Producto', 'Consultoria'],
    liveUrl: 'https://dynamicsduty.com/Acerca',
    featured: true,
  },
  {
    id: 'project3',
    titleKey: 'projects.items.project3.title',
    descriptionKey: 'projects.items.project3.description',
    tags: ['YouTube', 'Divulgacion', 'Power Platform', 'IA'],
    liveUrl: 'https://www.youtube.com/@DaniCCardenas',
    featured: true,
  },
  {
    id: 'project4',
    titleKey: 'projects.items.project4.title',
    descriptionKey: 'projects.items.project4.description',
    tags: ['Udemy', 'Power Automate', 'Formacion', 'Curso'],
    liveUrl: 'https://www.udemy.com/course/power-automate-cloud-desde-principiantes-a-expertos/',
    featured: true,
  },
  {
    id: 'project5',
    titleKey: 'projects.items.project5.title',
    descriptionKey: 'projects.items.project5.description',
    tags: ['Comunidad', 'Power Platform', 'Barcelona', 'Eventos'],
    liveUrl: 'https://powerplatformbcn.cat/',
    featured: true,
  },
];
