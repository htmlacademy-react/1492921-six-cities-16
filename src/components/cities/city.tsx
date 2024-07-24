import { CityName } from '../../types/types';
import classNames from 'classnames';

type CityProps = {
  cityName: CityName;
  isActive: boolean;
};

export default function City({ cityName, isActive }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={classNames('locations__item-link', 'tabs__item', {
          'tabs__item--active': isActive,
        })}
        href="#"
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}
