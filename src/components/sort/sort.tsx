import { SortItems } from '../../const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { placesSelectors, setSorting } from '../../store/places-slice';
import { useState } from 'react';
import { SortId } from '../../types/types';

export default function Sort(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const sortActive = useAppSelector(placesSelectors.sortType);
  const dispatch = useAppDispatch();

  const handleSortChange = (sortType: SortId) => {
    setIsOpened(!isOpened);
    dispatch(setSorting(sortType));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        &nbsp;{SortItems[sortActive].text}&nbsp;
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {Object.entries(SortItems).map((entry) => (
          <li
            key={entry[0]}
            className={classNames('places__option', {
              'places__option--active': entry[0] === sortActive,
            })}
            tabIndex={0}
            onClick={() => handleSortChange(entry[0])}
          >
            {entry[1].text}
          </li>
        ))}
      </ul>
    </form>
  );
}
