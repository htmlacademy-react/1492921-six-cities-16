import { render, fireEvent } from '@testing-library/react';
import { Bookmark } from '@components';
import { BookmarkType, NameSpace, Pages } from '@src/const';
import { withRoutes, withStore, mockInitialState } from '@src/mock/mock';
import { mockUserAuthState, mockUserNoAuthState } from '@src/mock/mock-user';
import { UserState } from '@store/user-slice/user-slice';

const getComponent = (
  component: JSX.Element,
  userState: UserState = mockUserAuthState
) =>
  withStore(withRoutes(component), {
    ...mockInitialState,
    [NameSpace.User]: userState,
  });

const mockedUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('BookmarkButton', () => {
  it('renders a button with the correct class name', () => {
    const type = BookmarkType.Place;
    const component = getComponent(
      <Bookmark viewType={type} placeId={'123'} isFavorite />
    ).withStoreComponent;

    const { getByRole } = render(component);

    expect(getByRole('button')).toHaveClass(
      `${type.classPrefix}__bookmark-button ${type.classPrefix}__bookmark-button--active`
    );
  });

  it('calls dispatch when button is clicked', () => {
    const type = BookmarkType.Place;
    const { withStoreComponent: component, mockStore } = getComponent(
      <Bookmark viewType={type} placeId={'123'} isFavorite />
    );
    vi.spyOn(mockStore, 'dispatch');

    const { getByRole } = render(component);
    const button = getByRole('button');
    fireEvent.click(button);

    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });

  it('redirect to login when not authorized', () => {
    const type = BookmarkType.Place;
    const component = getComponent(
      <Bookmark viewType={type} placeId={'123'} isFavorite />,
      mockUserNoAuthState
    ).withStoreComponent;
    const navigateOption = {
      state: {
        from: {
          pathname: '/',
          hash: '',
          key: 'default',
          search: '',
          state: null,
        },
      },
    };

    const { getByRole } = render(component);
    const button = getByRole('button');
    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith(
      Pages.Login.route,
      navigateOption
    );
  });
});
