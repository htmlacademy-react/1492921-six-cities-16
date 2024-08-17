import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Place, PlacesCity } from '../types/types';
import { EMPTY_PLACES, NameSpace } from '../const';
import { loadFavorite, loadOffers, uploadFavorite } from './api-actions';
import { createSelector } from 'reselect';

type FavoritesState = {
  places: Place[];
  isLoading: boolean;
  count: number;
};

const initialState: FavoritesState = {
  places: EMPTY_PLACES,
  isLoading: false,
  count: 0,
};

const loadingWait = (state: FavoritesState) => {
  state.isLoading = true;
};
const loadingError = (state: FavoritesState) => {
  state.isLoading = false;
};
const loadingEnd = (state: FavoritesState, action: PayloadAction<Place[]>) => {
  state.places = action.payload;
  state.count = state.places.length;
  state.isLoading = false;
};

const selectFavorites = (places: Place[]): PlacesCity =>
  Object.groupBy(places, (place) => place.city.name);

const setFavorite = (state: FavoritesState, action: PayloadAction<Place>) => {
  const placeFavorite = state.places.find(
    (place) => place.id === action.payload.id
  );
  if (placeFavorite && !action.payload.isFavorite) {
    state.places = state.places.filter(
      (place) => place.id !== action.payload.id
    );
    state.count -= 1;
    return;
  }
  if (!placeFavorite && action.payload.isFavorite) {
    state.places.push(action.payload);
    state.count += 1;
  }
};

const loadOffersEnd = (
  state: FavoritesState,
  action: PayloadAction<Place[]>
) => {
  state.count = action.payload.filter((offer) => offer.isFavorite).length;
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorite.pending, loadingWait)
      .addCase(loadFavorite.fulfilled, loadingEnd)
      .addCase(loadFavorite.rejected, loadingError)
      .addCase(uploadFavorite.fulfilled, setFavorite)
      .addCase(loadOffers.fulfilled, loadOffersEnd);
  },
  selectors: {
    places: (state) => state.places,
    isLoading: (state) => state.isLoading,
    count: (state) => state.count,
  },
});

const favoritesSelectors = {
  ...favoritesSlice.selectors,
  placesCity: createSelector(favoritesSlice.selectors.places, (places) =>
    selectFavorites(places)
  ),
};

export { favoritesSelectors };
export default favoritesSlice.reducer;
