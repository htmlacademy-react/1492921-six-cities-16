import {Offer} from '../../types/types';
import {BookmarkType, PremiumType, RatingType, PriceType} from '../../const';
import {numberItemsText, capitalLetterText} from '../../utils';
import Premium from './premium';
import Bookmark from './bookmark';
import Rating from './rating';
import Price from './price';
import Reviews from './reviews';
import ReviewForm from './review-form';
import {loginInfo} from '../../data/user';
import classNames from 'classnames';


type OfferProps = {
	offer: Offer;
}
export default function OfferCard({offer}: OfferProps): JSX.Element {
  return (
    <div className="offer__wrapper">
      {offer.isPremium && <Premium viewType={PremiumType.Offer} />}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{offer.title}</h1>
        <Bookmark isFavorite={offer.isFavorite} viewType={BookmarkType.Offer} />
      </div>
      <Rating value={offer.rating} viewType={RatingType.Offer} />
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">{capitalLetterText(offer.type)}</li>
        <li className="offer__feature offer__feature--bedrooms">{numberItemsText(offer.bedrooms, 'Bedroom')}</li>
        <li className="offer__feature offer__feature--adults">Max {numberItemsText(offer.maxAdults, 'adult')}</li>
      </ul>
      <Price value={offer.price} viewType={PriceType.Offer} />
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {offer.goods.map(
            (item) => <li key={item} className="offer__inside-item">{item}</li>
          )}
        </ul>
      </div>
      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className={classNames('offer__avatar-wrapper', {'offer__avatar-wrapper--pro': offer.host.isPro}, 'user__avatar-wrapper')}>
            <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"></img>
          </div>
          <span className="offer__user-name">{offer.host.name}</span>
          <span className="offer__user-status">{offer.host.isPro && 'Pro'}</span>
        </div>
        <div className="offer__description">
          <p className="offer__text">{offer.description.split('.')[0]}</p>
          <p className="offer__text">{offer.description.substring(offer.description.split('.')[0].length + 2)}</p>
        </div>
      </div>
      <section className="offer__reviews reviews">
        <Reviews offerId={offer.id} />
        {(loginInfo.name !== '') && <ReviewForm offerId={offer.id} />}
      </section>
    </div>
  );
}
