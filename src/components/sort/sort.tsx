import { SortItems } from '../../const';
import classNames from 'classnames';

type SortProps = {
  sortActive: keyof typeof SortItems;
};

export default function Sort({ sortActive }: SortProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        &nbsp;{SortItems[sortActive]}&nbsp;
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
            {entry[1]}
          </li>
        ))}
      </ul>
    </form>
  );
}
