import { Route, Routes } from 'react-router-dom';
import { Pages } from '@src/const';
import LoginPage from '@pages/login-page/login-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import OfferPage from '@pages/offer-page/offer-page';
import ErrorPage from '@pages/error-page/error-page';
import { PrivateRoute } from '@components';
import { HelmetProvider } from 'react-helmet-async';
import { userSelectors } from '@store/user-slice/user-slice';
import { loadFavorite } from '@store/api-actions';
import { useAppDispatch, useAppSelector } from '@src/hooks/store';
import { useEffect } from 'react';
import { MainPageRoutes } from '@src/routes';

type AppProps = {
  testElement?: JSX.Element;
};

export default function App({ testElement }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(userSelectors.isLogged);

  useEffect(() => {
    if (isLogged) {
      dispatch(loadFavorite());
    }
  }, [dispatch, isLogged]);

  return (
    <HelmetProvider>
      <Routes>
        {MainPageRoutes()}
        <Route
          path={Pages.Favorites.route}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={Pages.Login.route}
          element={
            <PrivateRoute isNoLogged>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path={Pages.Offer.route} element={<OfferPage />} />
        {testElement && <Route path="/test" element={testElement} />}
        <Route path={Pages.Error.route} element={<ErrorPage />} />
      </Routes>
    </HelmetProvider>
  );
}
