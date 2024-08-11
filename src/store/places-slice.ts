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

const placesSlice = createSlice({
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

const EMPTY_PLACES = [] as Place[];
const { setCurrentCity, setActivePlace, setSorting } = placesSlice.actions;

const placesSelectors = {
  ...placesSlice.selectors,
  placesCity: createSelector(
    placesSlice.selectors.places,
    placesSlice.selectors.cityName,
    placesSlice.selectors.sortType,
    (places, cityName, sortType) =>
      places[cityName]?.toSorted(SortItems[sortType].sort) ?? EMPTY_PLACES
  ),
  getCity: (cityName: CityName) =>
    createSelector(placesSlice.selectors.places, (places) => {
      const placesCity = places[cityName] ?? EMPTY_PLACES;
      return placesCity.length > 0
        ? placesCity[0].city
        : ({ name: cityName } as City);
    }),
  getPlace: (cityName: CityName, id: string) =>
    createSelector(
      placesSlice.selectors.places,
      (places) =>
        (places[cityName] ?? EMPTY_PLACES).find((place) => place.id === id) ??
        null
    ),
};

export {
  EMPTY_PLACES,
  placesSelectors,
  setCurrentCity,
  setActivePlace,
  setSorting,
};
export default placesSlice.reducer;
