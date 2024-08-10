import { configureStore } from '@reduxjs/toolkit';
import placesSlice from './places-slice';
import userSlice from './user-slice';
import { createAPI } from '../services/api';

export const api = createAPI();

const store = configureStore({
  reducer: {
    places: placesSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
