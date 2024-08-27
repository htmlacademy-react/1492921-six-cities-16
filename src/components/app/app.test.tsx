import { screen, render } from '@testing-library/react';
import { App } from '@components';
import { NameSpace, Pages } from '@src/const';
import { withStore, mockInitialState, withRoutes } from '@src/mock/mock';
import { mockUserAuthState, mockUserNoAuthState } from '@src/mock/mock-user';

describe('App component', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(withRoutes(<App />));
    const { getByText } = render(withStoreComponent);

    expect(getByText('Paris')).toBeInTheDocument();
    expect(getByText('Amsterdam')).toBeInTheDocument();
  });

  it('should render "login page" when user navigate to /login', () => {
    const { withStoreComponent } = withStore(
      withRoutes(<App />, Pages.Login.route),
      { ...mockInitialState, [NameSpace.User]: mockUserNoAuthState }
    );

    const { getByRole } = render(withStoreComponent);

    expect(getByRole('button')).toHaveTextContent('Sign in');
  });

  it('should render "Favorites page" when user navigate to /favorites', () => {
    const { withStoreComponent } = withStore(
      withRoutes(<App />, Pages.Favorites.route),
      { ...mockInitialState, [NameSpace.User]: mockUserAuthState }
    );

    render(withStoreComponent);
    const element = screen.getByTestId('test-favorites-page');

    expect(element).toBeDefined();
  });

  it('should render "Error page" when user enter not valid address', () => {
    const { withStoreComponent } = withStore(
      withRoutes(<App />, '/not-valid-route')
    );
    render(withStoreComponent);
    const element = screen.getByTestId('test-error-page');

    expect(element).toBeDefined();
  });
});
