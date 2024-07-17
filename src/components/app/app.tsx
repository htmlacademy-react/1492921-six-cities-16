import {CITY_INIT} from '../../const';
import {places, favorites} from '../../data/places';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { PlaceList } from '../../types/types';

export default function App(): JSX.Element {
  const placesCity: PlaceList = places.get(CITY_INIT) ?? [];
  return (
    <>
      {false && <LoginPage />}
      {false && <MainPage placesCity={placesCity} cityName={CITY_INIT} />}
      {true && <FavoritesPage places={favorites} />}
    </>
  );
}

