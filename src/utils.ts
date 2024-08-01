const numberItemsText = (count: number, text: string): string =>
  `${count} ${text}${count > 1 ? 's' : ''}`;
const capitalLetterText = (text: string): string =>
  text[0].toUpperCase() + text.slice(1);

const getRandomInt = (min: number, max: number) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = <T>(arr: T[] | readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomArrayElements = <T>(arr: T[]) =>
  arr.sort(() => 0.5 - Math.random()).slice(0, getRandomInt(1, arr.length));

export {
  numberItemsText,
  capitalLetterText,
  getRandomArrayElement,
  getRandomArrayElements,
};
