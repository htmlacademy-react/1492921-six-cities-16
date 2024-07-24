import { RatingStars } from '../../const';
import { ReviewFormSetup } from '../../const';

type RatingStarProps = {
  value: number;
  title: (typeof RatingStars)[number];
};
function RatingStar({ value, title }: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
      ></input>
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type ReviewFormProps = {
  offerId: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingStars.map((name, index) => (
          <RatingStar
            key={name}
            value={RatingStars.length - index}
            title={name}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {ReviewFormSetup.MinChars} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}
