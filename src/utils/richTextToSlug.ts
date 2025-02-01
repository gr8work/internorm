import accents from 'remove-accents';

const removeHtmlTagsRegex = /(<([^>]+)>)/gi;

export const richTextToSlug = (str: string) => str ?
  accents.remove(
    str
      .replaceAll(removeHtmlTagsRegex, '')
      .replaceAll('&#8211;', '-')
      .replaceAll('\n', '')
      .toLocaleLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('?', '')
  )

  :

  str
