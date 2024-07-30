import { CityName, ChangeCityFunction } from '../../types/types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CityProps = {
  cityName: CityName;
  isActive: boolean;
  onChangeCity: ChangeCityFunction;
};

export default function City({
  cityName,
  isActive,
  onChangeCity,
}: CityProps): JSX.Element {
  const cityClickHandler = () => {
    onChangeCity(cityName);
  };

  return (
    <li className="locations__item">
      <Link
        className={classNames('locations__item-link', 'tabs__item', {
          'tabs__item--active': isActive,
        })}
        to="#"
      >
        <span onClick={cityClickHandler}>{cityName}</span>
      </Link>
    </li>
  );
}
