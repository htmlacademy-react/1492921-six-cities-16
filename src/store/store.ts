import { configureStore } from '@reduxjs/toolkit';
import placesSlice from './places-slice';
import userSlice from './user-slice';
import offerSlice from './offer-slice';
import favoritesSlice from './favorites-slice';
import { createAPI } from '../services/api';
import { NameSpace } from '../const';

export const api = createAPI();

const store = configureStore({
  reducer: {
    [NameSpace.Places]: placesSlice,
    [NameSpace.User]: userSlice,
    [NameSpace.Offer]: offerSlice,
    [NameSpace.Favorites]: favoritesSlice,
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
