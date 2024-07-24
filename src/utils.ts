const numberItemsText = (count: number, text: string): string =>
  `${count} ${text}${count > 1 ? 's' : ''}`;
const capitalLetterText = (text: string): string =>
  text[0].toUpperCase() + text.slice(1);

export { numberItemsText, capitalLetterText };
