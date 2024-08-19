import { PlaceCardType } from '../../const';
import { offerSelectors } from '../../store/offer-slice';
import PlaceCard from './place-card';
import Loading from '../loader/loading';
import { Place } from '../../types/types';
import { useAppSelector } from '../../hooks/store';

type NearPlacesProps = {
  places: Place[];
};

export default function NearPlaces({ places }: NearPlacesProps): JSX.Element {
  const isLoadingNearPlaces = useAppSelector(
    offerSelectors.isLoadingNearPlaces
  );
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {isLoadingNearPlaces ? (
        <Loading />
      ) : (
        <div className="near-places__list places__list">
          {places.map((place) => (
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
