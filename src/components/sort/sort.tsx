import { SortItems } from '../../const';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks/store';
import { placesSelectors } from '../../store/places-slice';

export default function Sort(): JSX.Element {
  const sortActive = useAppSelector(placesSelectors.sortType);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        &nbsp;{SortItems[sortActive].text}&nbsp;
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.entries(SortItems).map((entry) => (
          <li
            key={entry[0]}
            className={classNames('places__option', {
              'places__option--active': entry[0] === sortActive,
            })}
            tabIndex={0}
          >
            {entry[1].text}
          </li>
        ))}
      </ul>
    </form>
  );
}
