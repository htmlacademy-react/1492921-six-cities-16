const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const isValidCity = (cityName: string) =>
  (CITIES as readonly string[]).includes(cityName);

export { CITIES, isValidCity };
