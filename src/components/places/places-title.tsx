type PlacesTitleProps = {
  placeCount: number;
  cityName: string;
}

export default function PlacesTitle({placeCount, cityName}: PlacesTitleProps): JSX.Element {
  return (
    <b className="places__found">{placeCount} places to stay in {cityName}</b>
  );
}
