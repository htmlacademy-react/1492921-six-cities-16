import {ComponentOptions} from '../../types/types';
import classNames from 'classnames';

type BookmarkProps = {
  isFavorite: boolean;
  viewType: ComponentOptions;
}

export default function Bookmark({isFavorite, viewType}: BookmarkProps): JSX.Element {
  return (
    <button className={classNames(`${viewType.classPrefix}__bookmark-button`, {[`${viewType.classPrefix}__bookmark-button--active`]: isFavorite}, 'button')} type="button">
      <svg className={`${viewType.classPrefix}__bookmark-icon`} width={viewType.imageWidth} height={viewType.imageHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
