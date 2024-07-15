import {CITY_INIT} from '../../const';
import {places} from '../../data/places';
import MainPage from '../../pages/main-page/main-page';
import { PlaceList } from '../../types/types';

export default function App(): JSX.Element {
  const placesCity: PlaceList = places.get(CITY_INIT) ?? [];
  return (
    <MainPage placesCity={placesCity} cityName={CITY_INIT} />
  );
}

