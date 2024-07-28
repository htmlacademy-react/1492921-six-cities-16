import { CityName } from '../types/types';
import { CITY_INIT } from '../const';

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

let currentCity: CityName = CITY_INIT;

const setCurrentCity = (city: CityName) => {
  currentCity = city;
};

const getCurrentCity = () => currentCity;

export { CITIES, setCurrentCity, getCurrentCity };
