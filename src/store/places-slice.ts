import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivePlaceId, CityName, Place, SortId } from '../types/types';
import { CITIES } from '../data/cities';
import { EMPTY_PLACES, NameSpace, ProcessStatus, SortItems } from '../const';
import { loadOffers, uploadFavorite } from './api-actions';
import { createSelector } from 'reselect';
import { updateFavorites } from '../data/favorites';

type PlacesState = {
  cityName: CityName;
  places: Place[];
  status: ProcessStatus;
  activePlaceId: ActivePlaceId;
  sortType: SortId;
  isLoaded: boolean;
};

const initialState: PlacesState = {
  cityName: CITIES[0],
  places: EMPTY_PLACES,
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
  state.status = ProcessStatus.Success;
  state.isLoaded = true;
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
      .addCase(uploadFavorite.fulfilled, setFavorite);
  },
  selectors: {
    places: (state) => state.places,
    cityName: (state) => state.cityName,
    status: (state) => state.status,
    activePlaceId: (state) => state.activePlaceId,
    sortType: (state) => state.sortType,
    isLoaded: (state) => state.isLoaded,
  },
});

const { setCurrentCity, setActivePlaceId, setSorting } = placesSlice.actions;

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
  isEmptyPlacesCity: createSelector(
    selectorPlacesCity,
    (places) => places.length === 0
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
