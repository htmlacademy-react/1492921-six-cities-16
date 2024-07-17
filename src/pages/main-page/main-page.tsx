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

type NoPlacesProps = {
  cityName: string;
}

function NoPlaces({cityName}: NoPlacesProps): JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
      </div>
    </section>
  );
}

export default function MainPage({placesCity, cityName}: MainProps): JSX.Element {
  return (
    <div className={`page page--gray page--main ${placesCity.length === 0 ? 'page__main--index-empty' : ''}`}>
      <Header isLogon isMainPage isLoginPage={false} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities cityActive={cityName} />
        <div className="cities">
          <div className={`cities__places-container ${placesCity.length === 0 ? 'cities__places-container--empty' : ''} container`}>
            {placesCity.length === 0 ?
              <NoPlaces cityName={cityName} />
              :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesTitle placeCount={placesCity.length} cityName={cityName} />
                <Sort />
                <Places placesCity={placesCity}/>
              </section>}
            <div className="cities__right-section">
              {placesCity.length === 0 ? '' : <Map />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

