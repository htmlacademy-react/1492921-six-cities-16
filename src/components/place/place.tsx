import {PlaceCard, ComponentOptions} from '../../types/types';
import Rating from './rating';
import {PremiumType, BookmarkType} from '../../const';
import Premium from './premium';
import Bookmark from './bookmark';

type PlaceProps = {
	place: PlaceCard;
  viewType: ComponentOptions;
}

export default function Place({place, viewType}: PlaceProps): JSX.Element {
  return (
    <article className={`${viewType.classPrefix}__card place-card`}>
      {place.isPremium && <Premium viewType={PremiumType.PLACE} />}
      <div className={`${viewType.classPrefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={place.previewImage} width={viewType.imageWidth} height={viewType.imageHeight} alt="Place image"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={place.isFavorite} viewType={BookmarkType.PLACE} />
        </div>
        <Rating value={place.rating} />
        <h2 className="place-card__name">
          <a href="#">{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
