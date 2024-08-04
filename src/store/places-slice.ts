import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortId } from '../types/types';

export type OffersState = {
  activePlaceId: string;
  sortType: SortId;
};

const initialState: OffersState = {
  activePlaceId: '',
  sortType: 'Popular',
};

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setActivePlace: (state, action: PayloadAction<string>) => {
      state.activePlaceId = action.payload;
    },
    setSorting: (state, action: PayloadAction<SortId>) => {
      state.sortType = action.payload;
    },
  },
  selectors: {
    activePlaceId: (state) => state.activePlaceId,
    sortType: (state) => state.sortType,
  },
});

export const placesSelectors = placesSlice.selectors;
export const { setActivePlace, setSorting } = placesSlice.actions;
export default placesSlice.reducer;
