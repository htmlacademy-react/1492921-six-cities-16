import { PlaceCardType } from '../../const';
import { Place } from '../../types/types';
import PlaceCard from './place-card';

type NearPlacesProps = {
  places: Place[];
};

export default function NearPlaces({ places }: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            viewType={PlaceCardType.City}
          />
        ))}
      </div>
    </section>
  );
}
