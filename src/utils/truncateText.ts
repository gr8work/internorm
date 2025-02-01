export const truncateText = (text?: string, textLength = 60) => {
  const truncatedText = text && text.slice(0, textLength).concat('...');
  const isLongerTextThanTruncate = !!text && text.length > textLength;

  return isLongerTextThanTruncate ? truncatedText : text;
};
