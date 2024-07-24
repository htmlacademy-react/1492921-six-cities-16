import { Place, ComponentOptions } from '../../types/types';
import { PremiumType, BookmarkType, RatingType, PriceType } from '../../const';
import { capitalLetterText } from '../../utils';
import Premium from './premium';
import Bookmark from './bookmark';
import Rating from './rating';
import Price from './price';

type PlaceProps = {
  place: Place;
  viewType: ComponentOptions;
};

export default function PlaceCard({
  place,
  viewType,
}: PlaceProps): JSX.Element {
  return (
    <article className={`${viewType.classPrefix}__card place-card`}>
      {place.isPremium && <Premium viewType={PremiumType.Place} />}
      <div
        className={`${viewType.classPrefix}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={place.previewImage}
            width={viewType.imageWidth}
            height={viewType.imageHeight}
            alt="Place image"
          >
          </img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price value={place.price} viewType={PriceType.Place} />
          <Bookmark
            isFavorite={place.isFavorite}
            viewType={BookmarkType.Place}
          />
        </div>
        <Rating value={place.rating} viewType={RatingType.Place} />
        <h2 className="place-card__name">
          <a href="#">{place.title}</a>
        </h2>
        <p className="place-card__type">{capitalLetterText(place.type)}</p>
      </div>
    </article>
  );
}
