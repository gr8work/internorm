export const getFitWpUrl = (link: string | { url?: string } | undefined) => {
  if (!link) return '';

  if (typeof link !== 'string' && link?.url) return link.url;

  if (typeof link === 'string') return link;

  return '';
};

export const generateLink = (link: string) =>
  link
    ?.replaceAll(process.env.WPGRAPHQL_URL?.replaceAll('/graphql', '') || '', '')
    .replace('https://okna-pasywne.pl', '') || '';
