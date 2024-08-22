import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Place } from '../../types/types';
import { EMPTY_PLACES, NameSpace } from '../../const';
import { loadFavorite, uploadFavorite } from '../api-actions';
import { createSelector } from 'reselect';

type FavoritesState = {
  places: Place[];
  isLoading: boolean;
};

const initialState: FavoritesState = {
  places: EMPTY_PLACES,
  isLoading: false,
};

const loadingWait = (state: FavoritesState) => {
  state.isLoading = true;
};
const loadingError = (state: FavoritesState) => {
  state.isLoading = false;
};
const loadingEnd = (state: FavoritesState, action: PayloadAction<Place[]>) => {
  state.places = action.payload;
  state.isLoading = false;
};

const setFavorite = (state: FavoritesState, action: PayloadAction<Place>) => {
  const placeFavorite = state.places.find(
    (place) => place.id === action.payload.id
  );
  if (placeFavorite && !action.payload.isFavorite) {
    state.places = state.places.filter(
      (place) => place.id !== action.payload.id
    );
    return;
  }
  if (!placeFavorite && action.payload.isFavorite) {
    state.places.push(action.payload);
  }
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
      .addCase(uploadFavorite.fulfilled, setFavorite);
  },
  selectors: {
    places: (state) => state.places,
    isLoading: (state) => state.isLoading,
    count: (state) => state.places.length,
  },
});

const favoritesSelectors = {
  ...favoritesSlice.selectors,
  placesCity: createSelector(favoritesSlice.selectors.places, (places) =>
    Object.groupBy(places, (place) => place.city.name)
  ),
};

export { favoritesSelectors };
export default favoritesSlice.reducer;
