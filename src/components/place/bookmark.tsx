import { useLocation, useNavigate } from 'react-router-dom';
import { Pages } from '../../const';
import { ComponentOptions } from '../../types/types';
import classNames from 'classnames';
import { memo, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/user-slice';
import { uploadFavorite } from '../../store/api-actions';

type BookmarkProps = {
  placeId: string;
  isFavorite: boolean;
  viewType: ComponentOptions;
};

function BookmarkComponent({
  placeId,
  isFavorite,
  viewType,
}: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [isCheck, setCheck] = useState(isFavorite);
  const navigate = useNavigate();
  const isLogged = useAppSelector(userSelectors.isLogged);

  const className = useMemo(
    () =>
      classNames(
        `${viewType.classPrefix}__bookmark-button`,
        {
          [`${viewType.classPrefix}__bookmark-button--active`]:
            isCheck && isLogged,
        },
        'button'
      ),
    [isCheck, isLogged, viewType]
  );

  const handleBookmarkButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!isLogged) {
      navigate(Pages.Login.route, { state: { from: location } });
      return;
    }
    evt.stopPropagation();
    dispatch(uploadFavorite({ id: placeId, isFavorite: !isCheck }));
    setCheck(!isCheck);
  };

  return (
    <button
      className={className}
      type="button"
      onClick={handleBookmarkButtonClick}
    >
      <svg
        className={`${viewType.classPrefix}__bookmark-icon`}
        width={viewType.imageWidth}
        height={viewType.imageHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

const Bookmark = memo(BookmarkComponent);
export default Bookmark;
