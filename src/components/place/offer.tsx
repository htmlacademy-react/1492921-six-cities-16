import {Pages} from '../../const';
import Header from '../header/header';
import OfferGallery from './offer-gallery';
import Premium from './premium';
import Bookmark from './bookmark';
import {BookmarkType} from '../../const';

import {Offer, ComponentOptions} from '../../types/types';
import {getOffer} from '../../data/offer';
import Rating from './rating';
import classNames from 'classnames';
import {favorites} from '../../data/places';

type OfferProps = {
	offerId: typeof Offer.id;
}

export default function Offer({offerId}: OfferProps): JSX.Element {
  const offer: Offer = getOffer(offerId);
  return (
    <div className="offer__wrapper">
              <Premium />
              <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <Bookmark isFavorite={offer.isFavorite} viewType={BookmarkType.OFFER} />
            </div>
              <div class="offer__rating rating">
                <div class="offer__stars rating__stars">
                  <span style="width: 80%"></span>
                  <span class="visually-hidden">Rating</span>
                </div>
                <span class="offer__rating-value rating__value">4.8</span>
              </div>
              <ul class="offer__features">
                <li class="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li class="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li class="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div class="offer__price">
                <b class="offer__price-value">&euro;120</b>
                <span class="offer__price-text">&nbsp;night</span>
              </div>
              <div class="offer__inside">
                <h2 class="offer__inside-title">What&apos;s inside</h2>
                <ul class="offer__inside-list">
                  <li class="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li class="offer__inside-item">
                    Washing machine
                  </li>
                  <li class="offer__inside-item">
                    Towels
                  </li>
                  <li class="offer__inside-item">
                    Heating
                  </li>
                  <li class="offer__inside-item">
                    Coffee machine
                  </li>
                  <li class="offer__inside-item">
                    Baby seat
                  </li>
                  <li class="offer__inside-item">
                    Kitchen
                  </li>
                  <li class="offer__inside-item">
                    Dishwasher
                  </li>
                  <li class="offer__inside-item">
                    Cabel TV
                  </li>
                  <li class="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div class="offer__host">
                <h2 class="offer__host-title">Meet the host</h2>
                <div class="offer__host-user user">
                  <div class="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img class="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar">
                  </div>
                  <span class="offer__user-name">
                    Angelina
                  </span>
                  <span class="offer__user-status">
                    Pro
                  </span>
                </div>
                <div class="offer__description">
                  <p class="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p class="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section class="offer__reviews reviews">
                <h2 class="reviews__title">Reviews &middot; <span class="reviews__amount">1</span></h2>
                <ul class="reviews__list">
                  <li class="reviews__item">
                    <div class="reviews__user user">
                      <div class="reviews__avatar-wrapper user__avatar-wrapper">
                        <img class="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar">
                      </div>
                      <span class="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div class="reviews__info">
                      <div class="reviews__rating rating">
                        <div class="reviews__stars rating__stars">
                          <span style="width: 80%"></span>
                          <span class="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p class="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time class="reviews__time" datetime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <form class="reviews__form form" action="#" method="post">
                  <label class="reviews__label form__label" for="review">Your review</label>
                  <div class="reviews__rating-form form__rating">
                    <input class="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio">
                    <label for="5-stars" class="reviews__rating-label form__rating-label" title="perfect">
                      <svg class="form__star-image" width="37" height="33">
                        <use xlink:href="#icon-star"></use>
                      </svg>
                    </label>

                    <input class="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio">
                    <label for="4-stars" class="reviews__rating-label form__rating-label" title="good">
                      <svg class="form__star-image" width="37" height="33">
                        <use xlink:href="#icon-star"></use>
                      </svg>
                    </label>

                    <input class="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio">
                    <label for="3-stars" class="reviews__rating-label form__rating-label" title="not bad">
                      <svg class="form__star-image" width="37" height="33">
                        <use xlink:href="#icon-star"></use>
                      </svg>
                    </label>

                    <input class="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio">
                    <label for="2-stars" class="reviews__rating-label form__rating-label" title="badly">
                      <svg class="form__star-image" width="37" height="33">
                        <use xlink:href="#icon-star"></use>
                      </svg>
                    </label>

                    <input class="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio">
                    <label for="1-star" class="reviews__rating-label form__rating-label" title="terribly">
                      <svg class="form__star-image" width="37" height="33">
                        <use xlink:href="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea class="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div class="reviews__button-wrapper">
                    <p class="reviews__help">
                      To submit review please make sure to set <span class="reviews__star">rating</span> and describe your stay with at least <b class="reviews__text-amount">50 characters</b>.
                    </p>
                    <button class="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
  );
}
