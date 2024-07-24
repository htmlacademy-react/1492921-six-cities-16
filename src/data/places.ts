import { Place, PlaceList } from '../types/types';
import { CITIES } from '../data/cities';
import { offers } from '../mock/mock-data';

const places = new Map<string, PlaceList>();

CITIES.forEach((city: string) => {
  places.set(
    city,
    offers.filter((item: Place) => city === item.city.name)
  );
});

const favorites = offers.filter((item: Place) => item.isFavorite);

export { places, favorites };
