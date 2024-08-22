import { memo } from 'react';
import { numberItemsText } from '../../utils/utils';

type PlacesTitleProps = {
  placeCount: number;
  cityName: string;
};

function PlacesTitleComponent({
  placeCount,
  cityName,
}: PlacesTitleProps): JSX.Element {
  return (
    <b className="places__found">
      {numberItemsText(placeCount, 'place')} to stay in {cityName}
    </b>
  );
}

const PlacesTitle = memo(PlacesTitleComponent);
export default PlacesTitle;
