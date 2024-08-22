import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Pages } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import MainRoute from '../route/main-route';
import { userSelectors } from '../../store/user-slice/user-slice';
import { loadFavorite } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { useEffect } from 'react';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(userSelectors.isLogged);

  useEffect(() => {
    if (isLogged) {
      dispatch(loadFavorite());
    }
  }, [dispatch, isLogged]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={Pages.Main.route}
            element={
              <MainRoute>
                <MainPage />
              </MainRoute>
            }
          />
          <Route
            path={Pages.City.route}
            element={
              <MainRoute>
                <MainPage />
              </MainRoute>
            }
          />
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
          <Route path={Pages.Error.route} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
