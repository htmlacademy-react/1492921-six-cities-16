import { Place } from '../../types/types';

type mapProps = {
  activePlace: Place | undefined;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Map({ activePlace }: mapProps): JSX.Element {
  return <section className="cities__map map"></section>;
}
