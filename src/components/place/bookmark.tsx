import { useNavigate } from 'react-router-dom';
import { Pages } from '../../const';
import { ComponentOptions } from '../../types/types';
import { userModel } from '../../data/user-model';
import { placesModel } from '../../data/places-model';
import classNames from 'classnames';
import { useState } from 'react';

type BookmarkProps = {
  idPlace: string;
  isFavorite: boolean;
  viewType: ComponentOptions;
};

export default function Bookmark({
  idPlace,
  isFavorite,
  viewType,
}: BookmarkProps): JSX.Element {
  const [isCheck, setCheck] = useState(isFavorite);
  const navigate = useNavigate();

  const bookmarkButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!userModel.isLogged) {
      navigate(Pages.Login.route);
      return;
    }
    evt.stopPropagation();
    placesModel.setFavorite(idPlace, !isCheck);
    setCheck(!isCheck);
  };

  return (
    <button
      className={classNames(
        `${viewType.classPrefix}__bookmark-button`,
        { [`${viewType.classPrefix}__bookmark-button--active`]: isCheck },
        'button'
      )}
      type="button"
      onClick={bookmarkButtonClick}
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
