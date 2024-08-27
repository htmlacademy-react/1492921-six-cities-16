import { render } from '@testing-library/react';
import { PrivateRoute } from '@components';
import { NameSpace, Pages } from '../../const';
import { withRoutes, withStore, mockInitialState } from '@src/mock/mock';
import { mockUserAuthState, mockUserNoAuthState } from '@src/mock/mock-user';
import { UserState } from '@store/user-slice/user-slice';
import { Route, Routes } from 'react-router-dom';

const redirectLogin = 'Login';

const getComponent = (
  component: JSX.Element,
  userState: UserState,
  route: string = Pages.Main.route
): JSX.Element =>
  withStore(
    withRoutes(
      <Routes>
        <Route
          path={Pages.Main.route}
          element={<PrivateRoute>{component}</PrivateRoute>}
        />
        <Route
          path={Pages.Login.route}
          element={
            <PrivateRoute isNoLogged>
              <div>{redirectLogin}</div>
            </PrivateRoute>
          }
        />
      </Routes>,
      route
    ),
    {
      ...mockInitialState,
      [NameSpace.User]: userState,
    }
  ).withStoreComponent;

describe('PrivateRoute component', () => {
  const privateText = 'Private text';
  const privateComponent = <div>{privateText}</div>;

  it('should display text for authorized users', () => {
    const component = getComponent(privateComponent, mockUserAuthState);

    const { getByText } = render(component);

    expect(getByText(privateText)).toBeInTheDocument();
  });

  it('should redirect to login page for not authorized users', () => {
    const component = getComponent(privateComponent, mockUserNoAuthState);

    const { getByText } = render(component);

    expect(getByText(redirectLogin)).toBeInTheDocument();
  });

  it('should not open login page, display text for not authorized users', () => {
    const component = getComponent(
      privateComponent,
      mockUserAuthState,
      Pages.Login.route
    );

    const { getByText, queryByText } = render(component);

    expect(queryByText(redirectLogin)).toBeNull();
    expect(getByText(privateText)).toBeInTheDocument();
  });
});
