import { CityName, City } from '../types/types';
import { placesModel } from './places-model';

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

const getCity = (cityName: CityName): City => {
  const places = placesModel.placesCity[cityName];
  if (places) {
    return places[0].city;
  }
  const emptyCity = {} as City;
  emptyCity.name = cityName;
  return emptyCity;
};

export { CITIES, isValidCity, getCity /*setCurrentCity, getCurrentCity,*/ };
