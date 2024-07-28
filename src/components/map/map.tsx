import { Place } from '../../types/types';

type mapProps = {
  activePlace: Place | undefined;
};

export default function Map({ activePlace }: mapProps): JSX.Element {
  return <section id={activePlace?.id} className="cities__map map"></section>;
}
