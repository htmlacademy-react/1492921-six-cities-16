import { Pages, SORT_INIT } from '../../const';
import { placesModel } from '../../data/places-model';
import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import PlacesTitle from '../../components/places/places-title';
import Sort from '../../components/sort/sort';
import PlaceList from '../../components/places/place-list';
import Map from '../../components/map/map';
import classNames from 'classnames';
import { CityName } from '../../types/types';

type MainProps = {
  cityName: CityName;
};

function NoPlaces({ cityName }: MainProps): JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {cityName}
        </p>
      </div>
    </section>
  );
}

export default function MainPage({ cityName }: MainProps): JSX.Element {
  const placesCity = placesModel.placesCity[cityName] ?? [];

  const isEmpty: boolean = placesCity.length === 0;
  return (
    <div
      className={classNames('page', 'page--gray', 'page--main', {
        'page__main--index-empty': isEmpty,
      })}
    >
      <Header page={Pages.Main} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities cityActive={cityName} />
        <div className="cities">
          <div
            className={classNames(
              'cities__places-container',
              { 'cities__places-container--empty': isEmpty },
              'container'
            )}
          >
            {isEmpty ? (
              <NoPlaces cityName={cityName} />
            ) : (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesTitle
                  placeCount={placesCity.length}
                  cityName={cityName}
                />
                <Sort sortActive={SORT_INIT} />
                <PlaceList places={placesCity} />
              </section>
            )}
            <div className="cities__right-section">{!isEmpty && <Map />}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
