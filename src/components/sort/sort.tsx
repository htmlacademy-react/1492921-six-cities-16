import { SortItems } from '@src/const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@src/hooks/store';
import { placesSelectors, setSorting } from '@store/places-slice/places-slice';
import { memo, useState } from 'react';
import { SortId } from '@src/types/types';

function SortComponent(): JSX.Element {
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
            onClick={() => handleSortChange(entry[0] as SortId)}
          >
            {entry[1].text}
          </li>
        ))}
      </ul>
    </form>
  );
}

const Sort = memo(SortComponent);
export default Sort;
