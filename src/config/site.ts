// Site configuration
export const SITE = {
  title: 'HOFI CLEAN s.r.o.', // Název společnosti [cite: 1, 15, 22]
  description: 'Jsme spolehlivá úklidová společnost, která sleduje nejnovější technologické trendy v oboru.', // Hlavní popis [cite: 3]
  url: 'https://yourdomain.com', // (Není v prezentaci)
  author: 'HOFI CLEAN s.r.o.', // Název společnosti [cite: 1, 15, 22]
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Request Quote', href: '/rfq' },
  { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

