import { configureStore } from '@reduxjs/toolkit';
import placesSlice from './places-slice';

const store = configureStore({
  reducer: {
    places: placesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
