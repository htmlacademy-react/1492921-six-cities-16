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

const getCity = (cityName: CityName): City => {
  const places = placesModel.placesCity[cityName];
  if (places) {
    return places[0].city;
  }
  const emptyCity = {} as City;
  emptyCity.name = cityName;
  return emptyCity;
};

const setCurrentCity = (city: CityName) => {
  currentCity = city;
};

const getCurrentCity = () => getCity(currentCity);

export { CITIES, setCurrentCity, getCurrentCity, getCity };
