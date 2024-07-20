import {CITY_INIT} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
//import OfferPage from '../../pages/offer-page/offer-page';

export default function App(): JSX.Element {
  return (
    <>
      {false && <LoginPage />}
      {true && <MainPage cityName={CITY_INIT} />}
      {false && <FavoritesPage />}
    </>
  );
}

