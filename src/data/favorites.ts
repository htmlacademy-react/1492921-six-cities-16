import { Place } from '../types/types';

const updateFavorites = (places: Place[], favorites: Place[]) => {
  places.forEach((place) => {
    place.isFavorite =
      favorites.find((favorite) => favorite.id === place.id)?.isFavorite ??
      false;
  });
};

export { updateFavorites };
