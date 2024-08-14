import { useEffect } from 'react';
import { PlaceCardType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { offerSelectors } from '../../store/offer-slice';
import PlaceCard from './place-card';
import { loadNearPlaces } from '../../store/api-actions';
import Loading from '../loader/loading';

type NearPlacesProps = {
  offerId: string;
};

export default function NearPlaces({ offerId }: NearPlacesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoadingNearPlaces = useAppSelector(
    offerSelectors.isLoadingNearPlaces
  );
  const nearPlaces = useAppSelector(offerSelectors.nearPlaces);

  useEffect(() => {
    if (offerId) {
      dispatch(loadNearPlaces(offerId));
    }
  }, [dispatch, offerId]);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {isLoadingNearPlaces ? (
        <Loading />
      ) : (
        <div className="near-places__list places__list">
          {nearPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              viewType={PlaceCardType.City}
              isActivePlaceChange={false}
            />
          ))}
        </div>
      )}
    </section>
  );
}
