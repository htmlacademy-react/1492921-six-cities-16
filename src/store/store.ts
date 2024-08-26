import { combineReducers, configureStore } from '@reduxjs/toolkit';
import placesSlice from '@store/places-slice/places-slice';
import userSlice from '@store/user-slice/user-slice';
import offerSlice from '@store/offer-slice/offer-slice';
import favoritesSlice from '@store/favorites-slice/favorites-slice';
import { createAPI } from '@src/services/api';
import { NameSpace } from '@src/const';
import { AxiosInstance } from 'axios';

export const api = createAPI();

const rootReducer = combineReducers({
  [NameSpace.Places]: placesSlice,
  [NameSpace.User]: userSlice,
  [NameSpace.Offer]: offerSlice,
  [NameSpace.Favorites]: favoritesSlice,
});

export function setupStore(
  preloadedState: Partial<RootState> = {},
  extra?: AxiosInstance
) {
  const extraArg = extra ?? api;

  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
