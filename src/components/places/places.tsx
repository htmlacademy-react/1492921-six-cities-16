import {PlaceList} from '../../types/types';
import Place from '../place/place';

type PlacesProps = {
  placesCity: PlaceList;
}

export default function Places({placesCity}: PlacesProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesCity.map((place) => <Place key={place.id} place={place} />)}
    </div>
  );
}
