import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ActivePlaceId,
  CityName,
  Place,
  PlacesCity,
  SortId,
} from '@src/types/types';
import {
  CITIES,
  EMPTY_PLACES,
  EMPTY_PLACES_CITIES,
  NameSpace,
  ProcessStatus,
  SortItems,
} from '@src/const';
import { loadOffers, uploadFavorite, userLogin } from '@store/api-actions';
import { createSelector } from 'reselect';

type PlacesState = {
  cityName: CityName;
  placesCities: PlacesCity;
  status: ProcessStatus;
  activePlaceId: ActivePlaceId;
  sortType: SortId;
};

const initialState: PlacesState = {
  cityName: CITIES[0],
  placesCities: EMPTY_PLACES_CITIES,
  status: ProcessStatus.Idle,
  activePlaceId: null,
  sortType: 'Popular',
};

const loadingWait = (state: PlacesState) => {
  state.status = ProcessStatus.Process;
};
const loadingError = (state: PlacesState) => {
  state.status = ProcessStatus.Error;
};
const loadingEnd = (state: PlacesState, action: PayloadAction<Place[]>) => {
  state.placesCities = Object.groupBy(
    action.payload,
    (offer) => offer.city.name
  );
  state.status = ProcessStatus.Success;
};

const startLoading = (state: PlacesState) => {
  state.status = ProcessStatus.Idle;
};

const setFavorite = (state: PlacesState, action: PayloadAction<Place>) => {
  const offer = state.placesCities[action.payload.city.name]?.find(
    (place) => place.id === action.payload.id
  );
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
      .addCase(uploadFavorite.fulfilled, setFavorite)
      .addCase(userLogin.fulfilled, startLoading);
  },
  selectors: {
    placesCities: (state) => state.placesCities,
    cityName: (state) => state.cityName,
    status: (state) => state.status,
    activePlaceId: (state) => state.activePlaceId,
    sortType: (state) => state.sortType,
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

export { placesSelectors, setCurrentCity, setActivePlaceId, setSorting };
export default placesSlice.reducer;
