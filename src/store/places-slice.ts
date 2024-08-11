import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ActivePlace,
  City,
  CityName,
  Place,
  PlacesCity,
  SortId,
} from '../types/types';
import { CITIES } from '../data/cities';
import { SortItems } from '../const';
import { loadOffers } from './api-actions';
import { createSelector } from 'reselect';
import { RootState } from './store';

type PlacesState = {
  cityName: CityName;
  places: PlacesCity;
  isLoading: boolean;
  activePlace: ActivePlace;
  sortType: SortId;
  favoritesCount: number;
};

const initialState: PlacesState = {
  cityName: CITIES[0],
  places: {},
  isLoading: false,
  activePlace: {} as Place,
  sortType: 'Popular',
  favoritesCount: 0,
};

const loadingWait = (state: PlacesState): void => {
  state.isLoading = true;
};
const loadingError = (state: PlacesState): void => {
  state.isLoading = false;
};
const loadingEnd = (
  state: PlacesState,
  action: PayloadAction<Place[]>
): void => {
  state.places = Object.groupBy(action.payload, (offer) => offer.city.name);
  state.isLoading = false;
};

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<CityName>) => {
      state.cityName = action.payload;
    },
    setActivePlace: (state, action: PayloadAction<ActivePlace>) => {
      state.activePlace = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortId>) => {
      state.sortType = action.payload;
    },
    setFavoritesCount: (state, action: PayloadAction<number>) => {
      state.favoritesCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOffers.pending, loadingWait)
      .addCase(loadOffers.fulfilled, loadingEnd)
      .addCase(loadOffers.rejected, loadingError);
  },
  selectors: {
    places: (state) => state.places,
    cityName: (state) => state.cityName,
    isLoading: (state) => state.isLoading,
    activePlace: (state) => state.activePlace,
    sortType: (state) => state.sortType,
    favoritesCount: (state) => state.favoritesCount,
  },
});

const FALLBACK_ARRAY = [] as Place[];

// Селектор для получение данных о городе по его названию
const selectorCity = createSelector(
  [
    (state: RootState) => state.places,
    (_state: RootState, cityName: CityName) => cityName,
  ],
  (state, cityName) => {
    const places = state.places[cityName] ?? [];
    return places.length > 0 ? places[0].city : ({ name: cityName } as City);
  }
);
const selectCity = (cityName: CityName) => (state: RootState) =>
  selectorCity(state, cityName);

const { setCurrentCity, setActivePlace, setSorting } = placesSlice.actions;

export { setCurrentCity, setActivePlace, setSorting };
export const placesSelectors = {
  ...placesSlice.selectors,
  city: selectCity,
  placesCity: createSelector(
    placesSlice.selectors.places,
    placesSlice.selectors.cityName,
    placesSlice.selectors.sortType,
    (places, cityName, sortType) =>
      places[cityName]?.toSorted(SortItems[sortType].sort) ?? FALLBACK_ARRAY
  ),
};

export default placesSlice.reducer;
