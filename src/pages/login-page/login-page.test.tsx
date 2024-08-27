import { render } from '@testing-library/react';
import LoginPage from './login-page';
import { mockInitialState, withRoutes, withStore } from '@src/mock/mock';
import { Pages } from '@src/const';

describe('LoginPage', () => {
  const component = withStore(
    withRoutes(<LoginPage />, Pages.Login.route),
    mockInitialState
  ).withStoreComponent;

  it('should renders sign in form', () => {
    const { getByRole } = render(component);
    expect(getByRole('button')).toHaveTextContent('Sign in');
  });

  it('should renders email input field', () => {
    const { getByPlaceholderText } = render(component);
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('should renders password input field', () => {
    const { getByPlaceholderText } = render(component);
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
