type CityProps = {
  cityName: string;
  isActive: boolean;
}

export default function City({cityName, isActive}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}
