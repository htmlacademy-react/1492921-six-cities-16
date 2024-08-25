import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '@src/services/api';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '@store/store';
import { NameSpace } from '@src/const';
import { initialState as initialStateUser } from '@store/user-slice/user-slice';
import { initialState as initialStatePlaces } from '@store/places-slice/places-slice';
import { initialState as initialStateFavorites } from '@src/store/favorites-slice/favorites-slice';
import { initialState as initialStateOffer } from '@store/offer-slice/offer-slice';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  ReturnType<typeof createAPI>,
  Action
>;

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: AppStore;
  mockAxiosAdapter: MockAdapter;
};

const withRoutes = (component: JSX.Element, pathname: string = '/') => (
  <MemoryRouter initialEntries={[{ pathname: pathname }]}>
    <HelmetProvider>{component}</HelmetProvider>
  </MemoryRouter>
);

const withStore = (
  component: JSX.Element,
  initialState?: Partial<RootState>
): ComponentWithMockStore => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const mockStore = setupStore(initialState, axios);

  return {
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  };
};

const mockInitialState: RootState = {
  [NameSpace.Places]: initialStatePlaces,
  [NameSpace.User]: initialStateUser,
  [NameSpace.Offer]: initialStateOffer,
  [NameSpace.Favorites]: initialStateFavorites,
};

export { withStore, mockInitialState, withRoutes };
