import { Place, ComponentOptions } from '../../types/types';
import {
  PremiumType,
  BookmarkType,
  RatingType,
  PriceType,
  Pages,
} from '../../const';
import { capitalLetterText } from '../../utils';
import Premium from './premium';
import Bookmark from './bookmark';
import Rating from './rating';
import Price from './price';
import { Link } from 'react-router-dom';

type PlaceProps = {
  place: Place;
  viewType: ComponentOptions;
  onActivePlaceChange?: (place: Place | undefined) => void;
};

export default function PlaceCard({
  place,
  viewType,
  onActivePlaceChange,
}: PlaceProps): JSX.Element {
  return (
    <article
      className={`${viewType.classPrefix}__card place-card`}
      onMouseEnter={() => onActivePlaceChange && onActivePlaceChange(place)}
      onMouseLeave={() => onActivePlaceChange && onActivePlaceChange(undefined)}
    >
      {place.isPremium && <Premium viewType={PremiumType.Place} />}
      <div
        className={`${viewType.classPrefix}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={Pages.Offer.route.replace(':offerId', place.id)}>
          <img
            className="place-card__image"
            src={place.previewImage}
            width={viewType.imageWidth}
            height={viewType.imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price value={place.price} viewType={PriceType.Place} />
          <Bookmark
            idPlace={place.id}
            isFavorite={place.isFavorite}
            viewType={BookmarkType.Place}
          />
        </div>
        <Rating value={place.rating} viewType={RatingType.Place} />
        <h2 className="place-card__name">
          <Link to={Pages.Offer.route.replace(':offerId', place.id)}>
            {place.title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalLetterText(place.type)}</p>
      </div>
    </article>
  );
}
