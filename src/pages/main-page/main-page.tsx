import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import PlacesTitle from '../../components/places/places-title';
import Sort from '../../components/sort/sort';
import Places from '../../components/places/places';
import Map from '../../components/map/map';
import {PlaceList} from '../../types/types';

type MainProps = {
  placesCity: PlaceList;
  cityName: string;
}

export default function MainPage({placesCity, cityName}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities cityActive={cityName} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesTitle placeCount={placesCity.length} cityName={cityName} />
              <Sort />
              <Places placesCity={placesCity}/>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

