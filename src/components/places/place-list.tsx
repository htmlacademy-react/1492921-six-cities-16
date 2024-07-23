import {Place} from '../../types/types';
import {PlaceCardType} from '../../const';
import PlaceCard from '../place/place-card';

type PlaceListProps = {
  places: Place[];
}

export default function PlaceList({places}: PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} viewType={PlaceCardType.City} />)}
    </div>
  );
}
