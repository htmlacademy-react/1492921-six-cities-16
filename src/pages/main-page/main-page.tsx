import { MapType } from '../../const';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import PlacesTitle from '../../components/places/places-title';
import Sort from '../../components/sort/sort';
import PlaceList from '../../components/places/place-list';
import Map from '../../components/map/map';
import classNames from 'classnames';
import { CityName } from '../../types/types';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { placesSelectors } from '../../store/places-slice';
import { useAppSelector } from '../../hooks/store';
import Loading from '../../components/loader/loading';

function NoPlaces(): JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b>No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in{' '}
          {useAppSelector(placesSelectors.cityName)}
        </p>
      </div>
    </section>
  );
}

function LoadingFrame(): JSX.Element {
  return (
    <section className="cities__no-places">
      <Loading />
    </section>
  );
}

export default function MainPage(): JSX.Element {
  const cityName = useParams().cityName as CityName;
  const placesCity = useAppSelector(placesSelectors.placesCity);
  const city = useAppSelector(placesSelectors.getCity(cityName));
  const isLoading = useAppSelector(placesSelectors.isLoading);
  const isEmpty: boolean = isLoading || placesCity.length === 0;

  return (
    <div
      className={classNames('page', 'page--gray', 'page--main', {
        'page__main--index-empty': isEmpty,
      })}
    >
      <Helmet>
        <title>6 городов. Главная страница.?</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities cityActive={cityName} />
        {/*onChangeCity={changeCityHandler} /> */}
        <div className="cities">
          <div
            className={classNames(
              'cities__places-container',
              { 'cities__places-container--empty': isEmpty },
              'container'
            )}
          >
            {isLoading && <LoadingFrame />}
            {!isLoading && isEmpty && <NoPlaces />}
            {!isLoading && !isEmpty && (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesTitle
                  placeCount={placesCity.length}
                  cityName={cityName}
                />
                <Sort />
                <PlaceList places={placesCity} />
              </section>
            )}
            <div className="cities__right-section">
              {!isEmpty && (
                <Map city={city} places={placesCity} viewType={MapType.City} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
