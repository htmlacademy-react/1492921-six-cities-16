import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '@src/services/api';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '@store/store';

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  ReturnType<typeof createAPI>,
  Action
>;
// export const extractActionsTypes = (actions: Action<string>[]) =>
//   actions.map(({ type }) => type);

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: AppStore;
  mockAxiosAdapter: MockAdapter;
};

export const withStore = (
  component: JSX.Element,
  initialState?: RootState
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
