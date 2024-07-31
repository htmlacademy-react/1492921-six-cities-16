import { CityName, City } from '../types/types';
import { CITY_INIT } from '../const';
import { placesModel } from './places-model';

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

const getCurrentCity = (): City => {
  const places = placesModel.placesCity[currentCity];
  if (places) {
    return places[0].city;
  }
  const emptyCity = {} as City;
  emptyCity.name = currentCity;
  return emptyCity;
};

export { CITIES, setCurrentCity, getCurrentCity };
