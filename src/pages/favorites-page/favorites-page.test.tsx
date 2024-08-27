import { render } from '@testing-library/react';
import {
  LOADING_MESSAGE,
  NameSpace,
  NO_PLACES_FAVORITES_MESSAGE,
  ProcessStatus,
} from '@src/const';
import { UserState } from '@store/user-slice/user-slice';
import { mockInitialState, withRoutes, withStore } from '@src/mock/mock';
import { mockUserAuthState, mockUserUnknownState } from '@src/mock/mock-user';
import FavoritesPage from './favorites-page';

const getComponent = (
  userState: UserState,
  mockStatus: ProcessStatus
): JSX.Element =>
  withStore(withRoutes(<FavoritesPage />), {
    ...mockInitialState,
    [NameSpace.Favorites]: {
      ...mockInitialState[NameSpace.Favorites],
      isLoading: mockStatus === ProcessStatus.Process,
    },
    [NameSpace.User]: userState,
  }).withStoreComponent;

describe('FavoritesPage', () => {
  it('should renders loading spinner when page are loading', () => {
    const component = getComponent(mockUserUnknownState, ProcessStatus.Process);

    const { getByText } = render(component);
    expect(getByText(LOADING_MESSAGE)).toBeInTheDocument();
  });

  it('should renders no places component when there are no offers', () => {
    const component = getComponent(mockUserAuthState, ProcessStatus.Success);

    const { getByText } = render(component);

    expect(getByText(NO_PLACES_FAVORITES_MESSAGE)).toBeInTheDocument();
  });
});
