import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ActivePlacePoint,
  City,
  CityName,
  Place,
  PlacePoint,
  SortId,
} from '../types/types';
import { CITIES } from '../data/cities';
import {
  EMPTY_PLACE_POINTS,
  EMPTY_PLACES,
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
  status: ProcessStatus;
  activePlacePoint: ActivePlacePoint;
  sortType: SortId;
  isLoaded: boolean;
};

const initialState: PlacesState = {
  cityName: CITIES[0],
  places: EMPTY_PLACES,
  status: ProcessStatus.Idle,
  activePlacePoint: null,
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
  state.status = ProcessStatus.Success;
  state.isLoaded = true;
};

const setFavorite = (state: PlacesState, action: PayloadAction<Place>) => {
  const offer = state.places.find((place) => place.id === action.payload.id);
  if (offer) {
    offer.isFavorite = action.payload.isFavorite;
  }
};

const loadedFavorites = (
  state: PlacesState,
  action: PayloadAction<Place[]>
) => {
  updateFavorites(state.places, action.payload);
};

const placesSlice = createSlice({
  name: NameSpace.Places,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<CityName>) => {
      state.cityName = action.payload;
    },
    setActivePlacePoint: (state, action: PayloadAction<ActivePlacePoint>) => {
      state.activePlacePoint = action.payload;
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
      .addCase(uploadFavorite.fulfilled, setFavorite)
      .addCase(loadFavorite.fulfilled, loadedFavorites);
  },
  selectors: {
    places: (state) => state.places,
    cityName: (state) => state.cityName,
    status: (state) => state.status,
    activePlacePoint: (state) => state.activePlacePoint,
    sortType: (state) => state.sortType,
    isLoaded: (state) => state.isLoaded,
  },
});

const { setCurrentCity, setActivePlacePoint, setSorting } = placesSlice.actions;

const selectorPlacesCity = createSelector(
  placesSlice.selectors.places,
  placesSlice.selectors.cityName,
  placesSlice.selectors.sortType,
  (places, cityName, sortType) =>
    Object.groupBy(places, (offer) => offer.city.name)[cityName]?.toSorted(
      SortItems[sortType].sort
    ) ?? EMPTY_PLACES
);

const placesSelectors = {
  ...placesSlice.selectors,
  placesCity: selectorPlacesCity,
  points: createSelector(
    selectorPlacesCity,
    (places) => places.map((place) => place as PlacePoint) ?? EMPTY_PLACE_POINTS
  ),
  isEmptyPlacesCity: createSelector(
    selectorPlacesCity,
    (places) => places.length === 0
  ),
  getCity: (cityName: CityName) =>
    createSelector(selectorPlacesCity, (places) =>
      places.length > 0 ? places[0].city : ({ name: cityName } as City)
    ),
  getPlace: (id: string) =>
    createSelector(
      placesSlice.selectors.places,
      (places) => places.find((place) => place.id === id) ?? null
    ),
};

export {
  placesSelectors,
  updateFavorites,
  setCurrentCity,
  setActivePlacePoint,
  setSorting,
};
export default placesSlice.reducer;
