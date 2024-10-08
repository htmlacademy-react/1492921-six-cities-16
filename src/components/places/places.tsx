import { CityName } from '@src/types/types';
import { MapType, NO_PLACES_CITY_MESSAGE, ProcessStatus } from '@src/const';
import { useAppDispatch, useAppSelector } from '@src/hooks/store';
import { placesSelectors } from '@store/places-slice/places-slice';
import { useEffect } from 'react';
import { loadOffers } from '@store/api-actions';
import classNames from 'classnames';
import { Loading, PlacesTitle, Sort, PlaceList, Map } from '@components';

type NoPlacesProps = {
  cityName: CityName;
};
function NoPlaces({ cityName }: NoPlacesProps): JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          {NO_PLACES_CITY_MESSAGE} {cityName}
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

type PlacesProps = {
  cityName: CityName;
};

export default function Places({ cityName }: PlacesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const placesCity = useAppSelector(placesSelectors.placesCity);
  const processStatus = useAppSelector(placesSelectors.status);
  const isEmpty = placesCity.length === 0;
  const isLoading = processStatus === ProcessStatus.Process;

  useEffect(() => {
    if (processStatus === ProcessStatus.Idle) {
      dispatch(loadOffers());
    }
  }, [dispatch, processStatus]);
  return (
    <div className="cities">
      <div
        className={classNames(
          'cities__places-container',
          { 'cities__places-container--empty': isEmpty },
          'container'
        )}
      >
        {isLoading && <LoadingFrame />}
        {!isLoading && isEmpty && <NoPlaces cityName={cityName} />}
        {!isLoading && !isEmpty && (
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesTitle placeCount={placesCity.length} cityName={cityName} />
            <Sort />
            <PlaceList places={placesCity} />
          </section>
        )}
        <div className="cities__right-section">
          {!isEmpty && (
            <Map
              city={placesCity[0].city}
              points={placesCity}
              viewType={MapType.City}
            />
          )}
        </div>
      </div>
    </div>
  );
}
