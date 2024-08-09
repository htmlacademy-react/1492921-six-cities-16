import { Place, PlacesCity } from '../types/types';

class PlacesModel {
  #places: Place[] = [];
  #favoritesCount: number;

  constructor() {
    this.#favoritesCount = this.#places.reduce(
      (count, place) => count + (place.isFavorite ? 1 : 0),
      0
    );
  }

  getPlace = (placeId: string): Place | undefined =>
    this.#places.find((item) => item.id === placeId) ?? ({} as Place);

  get favorites(): PlacesCity {
    return Object.groupBy(
      this.#places.filter((item) => item.isFavorite),
      (offer) => offer.city.name
    );
  }

  get favoritesCount() {
    return this.#favoritesCount;
  }

  setFavorite(id: string, isFavorite: boolean) {
    const place = this.getPlace(id);
    if (place) {
      if (place.isFavorite && !isFavorite) {
        this.#favoritesCount -= 1;
      } else if (!place.isFavorite && isFavorite) {
        this.#favoritesCount += 1;
      }
      place.isFavorite = isFavorite;
    }
  }
}

const placesModel = new PlacesModel();

export { placesModel };
