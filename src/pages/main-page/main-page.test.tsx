import { render } from '@testing-library/react';
import {
  CITIES,
  LOADING_MESSAGE,
  NameSpace,
  NO_PLACES_CITY_MESSAGE,
  ProcessStatus,
} from '@src/const';
import { UserState } from '@store/user-slice/user-slice';
import { mockInitialState, withRoutes, withStore } from '@src/mock/mock';
import MainPage from './main-page';
import {
  mockUserAuthState,
  mockUserNoAuthState,
  mockUserUnknownState,
} from '@src/mock/mock-user';

const getComponent = (
  userState: UserState,
  mockStatus: ProcessStatus
): JSX.Element =>
  withStore(withRoutes(<MainPage />), {
    ...mockInitialState,
    [NameSpace.Places]: {
      ...mockInitialState[NameSpace.Places],
      status: mockStatus,
    },
    [NameSpace.User]: userState,
  }).withStoreComponent;

describe('MainPage', () => {
  it('should renders main page with all cities tabs', () => {
    const component = getComponent(mockUserAuthState, ProcessStatus.Success);

    const { getByText } = render(component);

    CITIES.forEach((cityName) => {
      expect(getByText(cityName)).toBeInTheDocument();
    });
  });

  it('should renders loading spinner when page are loading', () => {
    const component = getComponent(mockUserUnknownState, ProcessStatus.Process);

    const { getByText } = render(component);
    expect(getByText(LOADING_MESSAGE)).toBeInTheDocument();
  });

  it('should renders no places component when there are no offers', () => {
    const component = getComponent(mockUserNoAuthState, ProcessStatus.Success);

    const { getByText } = render(component);

    expect(getByText(NO_PLACES_CITY_MESSAGE)).toBeInTheDocument();
  });
});
