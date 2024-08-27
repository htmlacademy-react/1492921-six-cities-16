import { render } from '@testing-library/react';
import { NameSpace, ProcessStatus } from '@src/const';
import { UserState } from '@store/user-slice/user-slice';
import { mockInitialState, withRoutes, withStore } from '@src/mock/mock';
import { mockPlaces } from '@src/mock/mock-offer';
import { mockUserAuthState } from '@src/mock/mock-user';
import FavoritesCount from './favorites-count';

const mockCount = 6;

const getComponent = (
  userState: UserState,
  mockStatus: ProcessStatus
): JSX.Element =>
  withStore(withRoutes(<FavoritesCount />), {
    ...mockInitialState,
    [NameSpace.Favorites]: {
      ...mockInitialState[NameSpace.Favorites],
      places: mockPlaces(mockCount),
      isLoading: mockStatus === ProcessStatus.Process,
    },
    [NameSpace.User]: userState,
  }).withStoreComponent;

describe('FavoritesCount component', () => {
  it(`should renders digit ${mockCount}`, () => {
    const component = getComponent(mockUserAuthState, ProcessStatus.Success);

    const { getByText } = render(component);

    expect(getByText(mockCount)).toBeInTheDocument();
  });
});
