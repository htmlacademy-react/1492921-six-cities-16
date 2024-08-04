import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, PlacesCity, SortId } from '../types/types';
import { placesModel } from '../data/places-model';
import { CITIES, getCurrentCity } from '../data/cities';
import { SortItems } from '../const';

type PlacesState = {
  //cityName: CityName;
  places: PlacesCity;
  activePlaceId: string;
  sortType: SortId;
};

const initialState: PlacesState = {
  //cityName: CITIES[0],
  places: placesModel.placesCity,
  activePlaceId: '',
  sortType: 'Popular',
};

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    /*
    setCurrentCity: (state, action: PayloadAction<CityName>) => {
      state.cityName = action.payload;
    },
    */
    setActivePlace: (state, action: PayloadAction<string>) => {
      state.activePlaceId = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortId>) => {
      state.sortType = action.payload;
    },
  },
  selectors: {
    //cityName: (state) => state.cityName,
    placesCity: (state) =>
      //state.places[state.cityName]
      state.places[getCurrentCity().name]
        ?.slice()
        .sort(SortItems[state.sortType].sort) ?? [],
    activePlaceId: (state) => state.activePlaceId,
    sortType: (state) => state.sortType,
  },
});

const placesSelectors = placesSlice.selectors;
const { /*setCurrentCity,*/ setActivePlace, setSorting } = placesSlice.actions;

export { placesSelectors, /*setCurrentCity,*/ setActivePlace, setSorting };

export default placesSlice.reducer;
