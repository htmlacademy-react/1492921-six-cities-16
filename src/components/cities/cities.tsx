import { CITIES } from '../../data/cities';
import { CityName, ChangeCityFunction } from '../../types/types';
import City from './city';

type CitiesProps = {
  cityActive: CityName;
  onChangeCity: ChangeCityFunction;
};

export default function Cities({
  cityActive,
  onChangeCity,
}: CitiesProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <City
              key={city}
              cityName={city}
              isActive={cityActive === city}
              onChangeCity={onChangeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
