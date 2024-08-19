import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ActivePlaceId,
  CityName,
  Place,
  PlacesCity,
  SortId,
} from '../types/types';
import { CITIES } from '../data/cities';
import {
  EMPTY_PLACES,
  EMPTY_PLACES_CITIES,
  NameSpace,
  ProcessStatus,
  SortItems,
} from '../const';
import { loadFavorite, loadOffers, uploadFavorite } from './api-actions';
import { createSelector } from 'reselect';
import { updateFavorites } from '../data/favorites';

type PlacesState = {
  cityName: CityName;
  places: Place[];
  placesCities: PlacesCity;
  status: ProcessStatus;
  activePlaceId: ActivePlaceId;
  sortType: SortId;
  isLoaded: boolean;
};

const initialState: PlacesState = {
  cityName: CITIES[0],
  places: EMPTY_PLACES,
  placesCities: EMPTY_PLACES_CITIES,
  status: ProcessStatus.Idle,
  activePlaceId: null,
  sortType: 'Popular',
  isLoaded: false,
};

const loadingWait = (state: PlacesState) => {
  state.status = ProcessStatus.Process;
};
const loadingError = (state: PlacesState) => {
  state.status = ProcessStatus.Error;
};
const loadingEnd = (state: PlacesState, action: PayloadAction<Place[]>) => {
  state.places = action.payload;
  state.placesCities = Object.groupBy(state.places, (offer) => offer.city.name);
  state.status = ProcessStatus.Success;
  state.isLoaded = true;
};

const updateFavorite = (state: PlacesState, action: PayloadAction<Place[]>) => {
  state.places.forEach((place) => {
    place.isFavorite =
      action.payload.find((favorite) => favorite.id === place.id)?.isFavorite ??
      false;
  });
};

const setFavorite = (state: PlacesState, action: PayloadAction<Place>) => {
  const offer = state.places.find((place) => place.id === action.payload.id);
  if (offer) {
    offer.isFavorite = action.payload.isFavorite;
  }
};

const placesSlice = createSlice({
  name: NameSpace.Places,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<CityName>) => {
      state.cityName = action.payload;
    },
    setActivePlaceId: (state, action: PayloadAction<ActivePlaceId>) => {
      state.activePlaceId = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortId>) => {
      state.sortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOffers.pending, loadingWait)
      .addCase(loadOffers.fulfilled, loadingEnd)
      .addCase(loadOffers.rejected, loadingError)
      .addCase(loadFavorite.fulfilled, updateFavorite)
      .addCase(uploadFavorite.fulfilled, setFavorite);
  },
  selectors: {
    places: (state) => state.places,
    placesCities: (state) => state.placesCities,
    cityName: (state) => state.cityName,
    status: (state) => state.status,
    activePlaceId: (state) => state.activePlaceId,
    sortType: (state) => state.sortType,
    isLoaded: (state) => state.isLoaded,
    isEmptyPlacesCity: (state) =>
      (state.placesCities[state.cityName]?.length ?? 0) === 0,
  },
});

const { setCurrentCity, setActivePlaceId, setSorting } = placesSlice.actions;

const placesSelectors = {
  ...placesSlice.selectors,
  placesCity: createSelector(
    placesSlice.selectors.placesCities,
    placesSlice.selectors.cityName,
    placesSlice.selectors.sortType,
    (places, cityName, sortType) =>
      places[cityName]?.toSorted(SortItems[sortType].sort) ?? EMPTY_PLACES
  ),
};

export {
  placesSelectors,
  updateFavorites,
  setCurrentCity,
  setActivePlaceId,
  setSorting,
};
export default placesSlice.reducer;
