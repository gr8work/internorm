export const preparePath = (uri: string) =>
  uri.replaceAll('/index.php', '').replace('https://okna-pasywne.pl', '');
