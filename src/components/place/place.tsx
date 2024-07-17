import {PlaceCard, PlaceCardOptions} from '../../types/types';
import {MAX_RATING} from '../../const';

type PlaceProps = {
	place: PlaceCard;
  viewType: PlaceCardOptions;
}

export default function Place({place, viewType}: PlaceProps): JSX.Element {
  return (
    <article className={`${viewType.classPrefix}__card place-card`}>
      {place.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
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
          <button className={`place-card__bookmark-button ${place.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${place.rating * 100 / MAX_RATING}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
