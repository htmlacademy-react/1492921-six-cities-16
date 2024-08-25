import { render, fireEvent, screen } from '@testing-library/react';
import { Logo } from '@components';
import { mockInitialState, withRoutes, withStore } from '@src/mock/mock';
import { LogoType } from '@src/const';
import { Routes } from 'react-router-dom';
import { MainPageRoutes, TestComponentRoute } from '@src/routes';

describe('Logo component', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      withRoutes(<Logo viewType={LogoType.Footer} />)
    );
    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('links to the main route when clicked', () => {
    const { getByRole } = render(
      withStore(
        withRoutes(
          <Routes>
            {MainPageRoutes()}
            {TestComponentRoute(<Logo viewType={LogoType.Header} />)}
          </Routes>,
          '/test'
        ),
        mockInitialState
      ).withStoreComponent
    );
    const link = getByRole('link');
    fireEvent.click(link);
    const element = screen.getByTestId('test-main-page');

    expect(element).toBeDefined();
  });
});
