import { Pages, SORT_INIT, MapType } from '../../const';
import { placesModel } from '../../data/places-model';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import PlacesTitle from '../../components/places/places-title';
import Sort from '../../components/sort/sort';
import PlaceList from '../../components/places/place-list';
import Map from '../../components/map/map';
import classNames from 'classnames';
import { CityName } from '../../types/types';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CITIES, getCurrentCity, setCurrentCity } from '../../data/cities';
import ErrorPage from '../error-page/error-page';

function NoPlaces(): JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in{' '}
          {getCurrentCity().name}
        </p>
      </div>
    </section>
  );
}

export default function MainPage(): JSX.Element {
  const [activePlaceId, setActivePlace] = useState('');
  const param = useParams();
  let cityName: CityName;
  if (!param.cityName) {
    cityName = getCurrentCity().name;
  } else if ((CITIES as readonly string[]).includes(param.cityName)) {
    cityName = param.cityName as CityName;
    setCurrentCity(cityName);
  } else {
    return (
      <ErrorPage
        description={`The city with the name ${param.cityName} was not found`}
      />
    );
  }
  const placesCity = placesModel.placesCity[cityName] ?? [];
  const isEmpty: boolean = placesCity.length === 0;

  return (
    <div
      className={classNames('page', 'page--gray', 'page--main', {
        'page__main--index-empty': isEmpty,
      })}
    >
      <Helmet>
        <title>6 городов. Главная страница.?</title>
      </Helmet>
      <Header page={Pages.Main} />
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
            {isEmpty ? (
              <NoPlaces />
            ) : (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesTitle
                  placeCount={placesCity.length}
                  cityName={cityName}
                />
                <Sort sortActive={SORT_INIT} />
                <PlaceList
                  places={placesCity}
                  onActivePlaceChange={setActivePlace}
                />
              </section>
            )}
            <div className="cities__right-section">
              {!isEmpty && (
                <Map
                  cityName={cityName}
                  places={placesCity}
                  activePlaceId={activePlaceId}
                  viewType={MapType.City}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
