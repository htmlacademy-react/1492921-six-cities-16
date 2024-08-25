import { PlaceCardType } from '@src/const';
import { offerSelectors } from '@store/offer-slice/offer-slice';
import { PlaceCard, Loading } from '@components';
import { Place } from '@src/types/types';
import { useAppSelector } from '@src/hooks/store';

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
              viewType={PlaceCardType.NearPlaces}
              isActivePlaceChange={false}
            />
          ))}
        </div>
      )}
    </section>
  );
}
