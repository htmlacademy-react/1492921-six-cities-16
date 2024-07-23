import {offers} from '../mock/mock-offers';
import { Place, PlacesCity } from '../types/types';

class PlacesModel {
  #places: Place[];
  #placesCity: PlacesCity;
  #favoritesCount: number;

  constructor() {
    this.#places = offers as Place[];
    this.#placesCity = Object.groupBy(this.#places, (offer) => offer.city.name);
    this.#favoritesCount = this.#places.reduce((count, place) => count + (place.isFavorite ? 1 : 0), 0);
  }

  get placesCity() {
    return this.#placesCity;
  }

  get favorites(): PlacesCity {
    return Object.groupBy(this.#places.filter((item) => item.isFavorite), (offer) => offer.city.name);
  }

  get favoritesCount() {
    return this.#favoritesCount;
  }

  getPlace (placeId: string): (Place | undefined) {
    return this.#places.find((item) => item.id === placeId);
  }

  setFavorite(id: string) {
    const place = this.getPlace(id);
    if (place) {
      if (place.isFavorite) {
        this.#favoritesCount -= 1;
      } else {
        this.#favoritesCount += 1;
      }
      place.isFavorite = !place.isFavorite;
    }
  }
}

const placesModel = new PlacesModel();

export {placesModel};
