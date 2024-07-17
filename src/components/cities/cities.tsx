import {CITIES} from '../../data/cities';
import City from './city';

type CitiesProps = {
  cityActive: string;
}

export default function Cities({cityActive}: CitiesProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (<City key={city} cityName={city} isActive={cityActive === city} />))}
        </ul>
      </section>
    </div>
  );
}
