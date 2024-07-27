import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CITY_INIT, Pages } from '../../const';
import { userModel } from '../../data/user-model';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={Pages.Main.route}
            element={<MainPage cityName={CITY_INIT} />}
          />
          <Route
            path={Pages.Favorites.route}
            element={
              <PrivateRoute authorizationStatus={userModel.status}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={Pages.Login.route} element={<LoginPage />} />
          <Route
            path={Pages.Offer.route}
            element={
              <OfferPage offerId={'38f33a49-572b-4199-8fac-b09c90206562'} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
