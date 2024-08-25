import { Place } from '@src/types/types';
import { PlaceCardType } from '@src/const';
import { PlaceCard } from '@components';

type PlaceListProps = {
  places: Place[];
};

export default function PlaceList({ places }: PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} viewType={PlaceCardType.City} />
      ))}
    </div>
  );
}
